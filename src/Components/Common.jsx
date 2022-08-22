const Common = {
  //takes int and formats the int with "b", "m", "k"
  formatNumShort: (int) =>
    Math.round(int).toString().length >= 10
      ? (int / 1000000000).toFixed(2).toString() + "b"
      : Math.round(int).toString().length >= 7
      ? (int / 1000000).toFixed(1).toString() + "m"
      : Math.round(int).toString().length >= 4
      ? (int / 1000).toFixed(0).toString()
      : Math.round(int).toString(),

  formatNumLong: (int) => Math.round(int).toLocaleString(),

  randomNum: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
};

export default Common;
