import { sycraia } from "../database";
import { bdoMarketAPI } from "./client";

const getItemPriceData = async () => {
  let price = [];
  for (let i = 0; i < sycraia.length; i++) {
    try {
      if (sycraia[i].marketItem) {
        let response = await bdoMarketAPI.get(`item?id=${sycraia[i].id}&lang=en`);
        price.push(response.data[0].basePrice);
      } else {
        price.push(sycraia[i].price);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return price;
};

export default getItemPriceData;
