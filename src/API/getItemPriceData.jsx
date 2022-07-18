import { sycraia } from "../database";

const getItemPriceData = async () => {
  let price = [];
  for (let i = 0; i < sycraia.length; i++) {
    try {
      const json = await fetch(`https://api.arsha.io/v2/tw/item?id=${sycraia[i].id}&lang=en`).then(
        (json) => json.json()
      );
      await console.log(`Price of ${json[0].name}: ${json[0].basePrice}`);
      await price.push(json[0].basePrices);
    } catch (error) {
      console.log("error", error);
    }
  }

  return price;
};

export default getItemPriceData;
