var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      var compiledText = "login: " +data[0].login + "\ngithub url: "+data[0].html_url+"\n";
      for(var i = 1; i < data.length;i++){
        console.log(data[i].login)
        console.log(data[i].html_url)
        compiledText = compiledText + "login: " +data[i].login+ "\ngithub url: " + data[i].html_url +"\n";
      }
      userContainer.innerText = compiledText;
    });
}
fetchButton.addEventListener('click', getApi);
