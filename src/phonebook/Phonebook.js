import { Component } from 'react';
import Section from '../phonebook/Section/Section'
import Input from './Input/Input'
import ContactsList from './ContactsList/ContactsList'
import Filter from './Filter/Filter'
import styles from './phonebook.module.css';
import { CSSTransition } from 'react-transition-group';
import ErrorMessage from './messages/errorMessage';
import SucessMessage from './messages/sucessMessage'
import { connect } from 'react-redux';
import actions from '../redux/phonebook/actions/actions';


class Phonebook extends Component {
    state = {      
        name: '',
      number: '',
      error: false,
      sucess: false,
    };
  
  onInputChange = evt => {    
    this.setState({ [evt.target.name]: evt.target.value });
    };    

  submitForm = evt => {
    evt.preventDefault();    
     this.setState({name: '', number: ''})
    if (this.props.contacts.find(({ name }) => name.toLowerCase() === this.state.name.toLowerCase())) {      
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({error: false})
      }, 2000)
      return;
    } else {
     this.setState({ sucess: true });
      setTimeout(() => {
        this.setState({sucess: false})
      }, 2000)
    }
   
    this.props.onAddContact(this.state.name, this.state.number);
  };
  
  render() {  
    const { error, sucess } = this.state;    
    return (<>
        <Section title='Phonebook'>
            <Input name={this.state.name}
          number={this.state.number}          
          onChangeInput={this.onInputChange}
          onSubmitForm={this.submitForm}/>    
      </Section>      
      <Section title='Contacts'>         
          <Filter />               
          <ContactsList/>               
        <CSSTransition in={error === true} timeout={250} classNames={styles} unmountOnExit>
          <ErrorMessage/>
        </CSSTransition>
        <CSSTransition in={sucess === true} timeout={250} classNames={styles} unmountOnExit>
          <SucessMessage/>
        </CSSTransition> 
        </Section>        
      </>
    )    
  }
}

const mapStateToProps = state => ({  
  contacts: state.contacts.items
});

const mapDispatchToProps = dispatch => ({
  onAddContact: (name, phone) => dispatch(actions.actionAdd(name, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);