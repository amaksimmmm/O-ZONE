const getData = (str) => {
  return fetch(
    // `https://test-o-zone-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}` так деают в реальны проектах 
    `https://test-o-zone-default-rtdb.firebaseio.com/goods.json`
    )
    .then((response) => {
      return response.json();
    });
};

export default getData;