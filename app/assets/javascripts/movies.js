// $("#low-budgets").html()
// $("#leo-movies").html()

$(window).ready(function(){
  $.getJSON("/movies.json").then(function(data){
    var movies = data.movies;
    console.log(movies);
  //   var lowBudgets = _.each(movies, function(movie){
  //     var lowBudget = _.where(movie.budget, 55);
  //     return lowBudget;
  //   });
  //   console.log(lowBudgets);
  // });
    var lowBudgets = _.filter(movies, function(movie){
      return movie.budget <= 55;
    });
    console.log(lowBudgets);
    $("#low-budgets").html("<h3>Low Budget Films</h3>" + lowBudgets.map(function(movie){
      return('<ul><li>' + "Title: " + movie.title + '</li>' + '<li>' + "Budget: " + movie.budget + '</li>' + '<li>' + "Stars: " + movie.stars + '</li></ul>');
    }).join(""));
    var leoMovies = _.filter(movies, function(movie){
      return _.contains(movie.stars, "Leonardo DiCaprio");
    });
    console.log(leoMovies);
    $("#leo-movies").html("<h3>The Lion of House DiCaprio</h3>" + leoMovies.map(function(movie){
      return('<ul><li>' + "Title: " + movie.title + '</li>' + '<li>' + "Budget: " + movie.budget + '</li>' + '<li>' + "Stars: " + movie.stars + '</li></ul>');
    }).join(""));
  });
});


// window.onload = function(){


  //all of our code
// }
