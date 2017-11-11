var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    var contactSex = '';
    var contactName = this.props.item.firstName;



      var stringLength = contactName.length;
      var lastChar = contactName.charAt(stringLength - 1);
      if (lastChar == 'a'){
        contactSex = 'girl';
      } else {
        contactSex = 'boy';
      }
    return (



      React.createElement('li', {className: 'contactItem'},
        React.createElement('div', {className: 'imageCont'},
          React.createElement('img', {
            className: 'contactImage',
            src: 'images/' +contactSex+ '.png'
          }),
        ),

        React.createElement('p', {className: 'contactLabel'}, this.props.item.firstName + ' ' + this.props.item.lastName),
        /*React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + ),*/
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, this.props.item.email)
      )
    )
  },
});
