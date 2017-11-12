var Counter3 = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  getDefaultProps:function(){
    console.log('ustala ścieżkę do obrazka avatara, zanim użytkownik nie wgra swojego pliku');
    return {source: '../images/defaultAvatar.jpg'}
  },
  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },
  reset: function() {
    this.setState({
      counter: this.state.counter = 0
    });
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('DOM nie musi być aktualizowany gdy stan się nie zmienia. Drugie wciśnięcie resetu');
    return nextState.counter !== this.state.counter;
  },
  componentWillUpdate: function() {
    console.log('metoda może wyzwalać proces przekazania na serwer danych przekazanych przez użytkownika');
  },
  render: function() {
    return React.createElement('div', {},
      React.createElement('div', {className: 'counter-cont third-cont'},
        React.createElement('div', {className: 'counter-display'},
          React.createElement('span', {}, 'Bottom counter ' + this.state.counter)
        ),
      ),
      React.createElement('nav',{},
        React.createElement('ul',{},
          React.createElement('li', {className: 'my-button', onClick: this.increment},
            React.createElement('p',{}, 'Dodaj')
          ),
          React.createElement('li', {className: 'my-button', onClick: this.decrement},
            React.createElement('p',{}, 'Odejmij')
          ),
          React.createElement('li', {className: 'my-button', onClick: this.reset},
            React.createElement('p',{}, 'Resetuj')
          ),
        ),

      ),

    );
  },
  componentDidUpdate: function() {
    console.log('metoda może wywołać zmiany w widoku dla elementów, które powiązane są ze stanem i właściwiościami, które zostały zmienione');
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('aktualizacja stanu na podstawie zmiany propsów');
  },
});
