var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    src: 'images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król lew',
    desc: 'Film o królu sawanny',
    src: 'images/lion.jpg'
  },
  {
    id: 3,
    title: 'Matrix',
    desc: 'Film o wirtualnej rzeczywistości',
    src: 'images/matrix.jpg'
  },
  {
    id: 4,
    title: 'Ojciec chrzestny',
    desc: 'Film o mafii',
    src: 'images/godfather.jpg'
  },
  {
    id: 5,
    title: 'Film o pszczołach',
    desc: 'Film o pszczołach',
    src: 'images/bee.jpg'
  }
];


var MoviesTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.object.isRequired,
  },
  render: function(){
    return React.createElement('h2', {}, this.props.title);
  },
});
var MoviesDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.object.isRequired,
  },
  render: function(){
    return React.createElement('p', {}, this.props.desc);
  },
});
var MoviesImage = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },
  render: function(){
    return React.createElement('p', {}, this.props.image);
  },
});

var moviesElements = movies.map(function(movie){
  return React.createElement('li', {key: movie.id},
    React.createElement(MoviesTitle, {title: movie.title}),
    React.createElement(MoviesDesc, {desc: movie.desc}),
    React.createElement(MoviesImage, {image: movie.src}),
    React.createElement('img', {src: movie.src})
  );
});

var myList =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(myList, document.getElementById('app'));
