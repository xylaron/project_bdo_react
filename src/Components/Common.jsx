const Common = {
  //takes int and formats the int with "b", "m", "k"
  formatNumShort: (int) => {
    let count = 0;
    let check = int;

    while (check > 1) {
      check /= 10;
      count++;
    }

    if (count >= 10) {
      return (int / 1000000000).toFixed(2).toString() + "b";
    } else if (count >= 7) {
      return (int / 1000000).toFixed(1).toString() + "m";
    } else if (count >= 4) {
      return (int / 1000).toFixed(0).toString() + "k";
    } else {
      return int.toString();
    }
  },

  formatNumLong: (int) => Math.round(int).toLocaleString(),

  randomNum: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
};

export default Common;
