const getItemPriceData = async (id) => {
  let price;
  try {
    const response = await fetch(`https://api.arsha.io/v2/tw/item?id=${id}&lang=en`);
    const json = await response.json();
    console.log(`Price of ${json[0].name}: ${json[0].basePrice}`);
    price = json[0].basePrice;
  } catch (error) {
    console.log("error", error);
  }
  return price;
};

export default getItemPriceData;
