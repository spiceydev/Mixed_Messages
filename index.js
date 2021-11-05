const fetch = require('node-fetch');

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

fetch('https://type.fit/api/quotes')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const randomNumber = Math.floor(Math.random() * data.length);
    console.log(data[randomNumber].text);
  });
