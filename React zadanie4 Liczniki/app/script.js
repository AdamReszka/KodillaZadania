var CounterCont = React.createClass({

  componentWillMount: function() {
    confirm('potwierdzam, że mam ukończone 18 lat');
    console.log('pozwala zweryfikować spełnienie dodatkowych warunków zanim załaduje komponent');
  },
  componentDidMount: function() {
    setTimeout(function(){
      var newEmail = prompt('Zostaw email i zapisz się do newslettera');
    }, 3000);
    console.log('metoda może pozwalać na zebranie dodatkowych danych już po załadowaniu komponentu');
  },
  componentWillUnmount: function() {
    console.log('odpięcie eventListenerów, gdyby to był moduł jakiegoś testu metoda mogłaby zliczać wyniki i przekazywać do komponentu zajmującego się wyświetlaniem oceny czy podsumowania');
  },
  render: function() {
    return React.createElement('div',{className: 'counters-box'},
      React.createElement(Counter, {}),
      React.createElement(Counter, {}),
      React.createElement(Counter, {})
    );
  },

});


var element = React.createElement(CounterCont);

ReactDOM.render(element, document.getElementById('app'));
