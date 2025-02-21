export const searchFilter = (goods, value) => {
  return goods.filter((goodsIteam) => {
    return goodsIteam.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsIteam) => {
    return goodsIteam.category === value;
  });
};

export const priceFilter = (goods, minValue, maxValue) => {
  const minPrice = parseFloat(minValue) || 0;
  const maxPrice = parseFloat(maxValue) || Infinity;

  // const filteredGoods  = goods
  //   .filter(item => item.price >= minPrice && item.price <= maxPrice)
  //   .sort((a, b) => a.price - b.price);
  
  // return filteredGoods;

  return goods.filter((goodsIteam) => {
    return goodsIteam.price >= minPrice && goodsIteam.price <= maxPrice;
  });

    /* полный второй вариант функции 
      export const priceFilter = (goods, value) => {
        const numericValue = parseFloat(value);
        return goods.filter((goodsIteam) => {
          return goodsIteam.price === numericValue;
        });
      };
    */

    /* первый вариант 
      export const priceFilter = (goods, value) => {
        return goods.filter((goodsIteam) => {
          return goodsIteam.price === parseFloat(value);
      });
    */
}; 
