var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {

    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('div',{className: 'nameRow'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
      ),

        React.createElement('input', {
          type: 'text',
          placeholder: 'Email',
          value: this.props.contact.email,
          className: 'email-input',
        }),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
      )
    )
  },
});
