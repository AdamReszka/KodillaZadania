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
  },
  {
    id: 6,
    title: 'Pan Kleks',
    desc: 'Film o piegach',
    src: 'images/kleks.jpg'
  }
];

/*komponent tytuł filmu*/
var MoviesTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function(){
    return React.createElement('h2', {}, this.props.title);
  },
});

/*komponent opis filmu*/
var MoviesDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function(){
    return React.createElement('p', {}, this.props.desc);
  },
});

/*komponent plakat do filmu*/
var MoviesImage = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
  },
  render: function(){
    return React.createElement('img', {src: this.props.image});
  },
});

/*komponent pojedynczy film*/
var Movie = React.createClass({
  propTypes: {
    key: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    movies: React.PropTypes.object.isRequired,
  },
  render: function(){
    return React.createElement('div',{},
    React.createElement(MoviesTitle, {title: movie.title}),
    React.createElement(MoviesDesc, {desc: movie.desc}),
    React.createElement(MoviesImage, {image: movie.src})
    );
  }
});
/*komponent lista filmów*/
var MoviesList = React.createClass({
  propTypes: {
    key: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
  },
  var moviesItems = movies.map(function(movie){
    return React.createElement(Movie, {key: movie.id, movies: movies}),
  });
  render: function(){

  }
});

var moviesElements = movies.map(function(movie){
  return React.createElement('li', {key: movie.id},
    React.createElement(MoviesTitle, {title: movie.title}),
    React.createElement(MoviesDesc, {desc: movie.desc}),
    React.createElement(MoviesImage, {image: movie.src})
  );
});





var myList =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),

  );
ReactDOM.render(myList, document.getElementById('app'));
