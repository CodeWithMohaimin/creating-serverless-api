fetch("https://codewithmohaimin.github.io/creating-serverless-api/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });
