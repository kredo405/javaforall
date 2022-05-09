const options = {
    method: 'GET',
    url: `https://javaforall.tech/api/front/developer`,
    mode: 'cors',
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        }
  };

  axios
    .request(options)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });