const getData = () => {
  return fetch('https://test-o-zone-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
      return response.json();
    });
};

export default getData;