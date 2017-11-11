var contacts = [
  {
    id: 1,
    firstName: 'Anna',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com'
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com'
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com'
  },
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement('p', {className: 'appTitle'}, 'moje kontakty'),
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement('div', {className: 'personBox'},
          React.createElement(Contacts, {items: contacts}, {})
        )

        )
      );

  }
});
