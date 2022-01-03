const getData = api => {
  return fetch(api)
    .then(response => response.json())
    .then(data => data)
    .catch(err => err);
};

export default getData;
