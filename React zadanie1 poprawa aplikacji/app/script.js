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



var moviesElements = movies.map(function(movie){

  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.src})
  );
});



var myList =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(myList, document.getElementById('app'));
