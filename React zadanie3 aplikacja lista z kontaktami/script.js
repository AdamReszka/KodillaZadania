var minBody = $(window).innerHeight();

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));


$('body').css('min-height',minBody);
