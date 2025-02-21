import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";

const searchPrice = () => {
  const minPriceInput = document.getElementById('min');
  const maxPriceInput = document.getElementById('max');
  
  [minPriceInput, maxPriceInput].forEach((collectionInput) => {
    collectionInput.addEventListener('input', () => {
      const minValue = minPriceInput.value;
      const maxValue = maxPriceInput.value;

      getData().then((data) => {
        renderGoods(priceFilter(data, minValue, maxValue)); //.sort((a, b) => a.price - b.price));
      });
    });
  }); 
};

export default searchPrice;
