export const tax = 0.85475; //Marketplace Tax Value for player

//prettier-ignore
export const sycraia = [
  { icon: require("./Assets/item_icons/44380.png"), price: 18000 },
  { icon: require("./Assets/item_icons/44381.png"), price: 10000 },
  { icon: require("./Assets/item_icons/16002.png"), price: 148000 * tax },
  { icon: require("./Assets/item_icons/16001.png"), price: 140000 * tax },
  { icon: require("./Assets/item_icons/768160.png"), price: 2570000 * tax },
  { icon: require("./Assets/item_icons/40545.png"), price: 1230000 * tax },
  { icon: require("./Assets/item_icons/40547.png"), price: 180320000 * tax },
  { icon: require("./Assets/item_icons/40548.png"), price: 3680000 * tax },
  { icon: require("./Assets/item_icons/16017.png"), price: 540000 * tax },
  { icon: require("./Assets/item_icons/12061.png"), price: 184000000 * tax },
  { icon: require("./Assets/item_icons/721003.png"), price: 3000000 * tax },
  { icon: require("./Assets/item_icons/721002.png"), price: 541000 * tax },
  { icon: require("./Assets/item_icons/9774.png"), price: 2908200 * tax },
];

//prettier-ignore
export const orccamp = [
  { icon: require("./Assets/item_icons/44482.png"), price: 18500 },
  { icon: require("./Assets/item_icons/16002.png"), price: 148000 * tax },
  { icon: require("./Assets/item_icons/16001.png"), price: 140000 * tax },
  { icon: require("./Assets/item_icons/768160.png"), price: 2570000 * tax },
  { icon: require("./Assets/item_icons/8124.png"), price: 3000000 },
  { icon: require("./Assets/item_icons/8135.png"), price: 2609000 },
  { icon: require("./Assets/item_icons/8145.png"), price: 9594255 },
  { icon: require("./Assets/item_icons/8133.png"), price: 10000000 },
  { icon: require("./Assets/item_icons/5956.png"), price: 20200 },
  { icon: require("./Assets/item_icons/752023.png"), price: 50000 },
];

const r = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//prettier-ignore
export let testData = [
  [r(7500, 8500), r(150, 300), r(50, 55), r(50, 55), r(15, 25), r(5, 10), r(0, 3), r(0, 6), r(5, 15), r(0, 2), r(30, 60), r(40, 80), r(40, 80)],
  [r(7500, 8500), r(150, 300), r(50, 55), r(50, 55), r(15, 25), r(5, 10), r(0, 3), r(0, 6), r(5, 15), r(0, 2), r(30, 60), r(40, 80), r(40, 80)],
  [r(7500, 8500), r(150, 300), r(50, 55), r(50, 55), r(15, 25), r(5, 10), r(0, 3), r(0, 6), r(5, 15), r(0, 2), r(30, 60), r(40, 80), r(40, 80)],
  [r(7500, 8500), r(150, 300), r(50, 55), r(50, 55), r(15, 25), r(5, 10), r(0, 3), r(0, 6), r(5, 15), r(0, 2), r(30, 60), r(40, 80), r(40, 80)],
  [r(7500, 8500), r(150, 300), r(50, 55), r(50, 55), r(15, 25), r(5, 10), r(0, 3), r(0, 6), r(5, 15), r(0, 2), r(30, 60), r(40, 80), r(40, 80)],
  [r(7500, 8500), r(150, 300), r(50, 55), r(50, 55), r(15, 25), r(5, 10), r(0, 3), r(0, 6), r(5, 15), r(0, 2), r(30, 60), r(40, 80), r(40, 80)],
];
