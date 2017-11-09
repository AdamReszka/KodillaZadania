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
  render: function() {
    return React.createElement('h2', {}, this.props.title);
  },
});

/*komponent opis filmu*/
var MoviesDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('p', {}, this.props.desc);
  },
});

/*komponent plakat do filmu*/
var MoviesImage = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('img', {src: this.props.image});
  },
});

/*komponent pojedynczy film*/
var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return React.createElement('li', {},
      React.createElement(MoviesTitle, {title: this.props.movie.title}),
      React.createElement(MoviesDesc, {desc: this.props.movie.desc}),
      React.createElement(MoviesImage, {image: this.props.movie.src})
    );
  }
});
/*komponent lista filmów*/
var MoviesList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function() {
    var moviesItems = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movie: movie});
    });

    return React.createElement('ul', {}, moviesItems);
  }
});

var myList =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {movies:movies}),
  );
ReactDOM.render(myList, document.getElementById('app'));
