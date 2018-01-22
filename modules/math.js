////////////////////////////////////////
// Math.  Expose common functions.
//

module.exports = class math {

  // Random weight between -0.2 and 0.2.
  static rand() {

    return Math.random() * 0.4 - 0.2;
  }

  // Mean squared error.
  static mse(errors) {

    var sum = errors.reduce(
      (sum, i) => {

        return sum + i * i;
      },
      0);
    return sum / errors.length;
  }

  // Sum up an array of numbers.
  static sum(array) {

    return array.reduce(
      (sum, i) => {

        return sum + i;
      },
      0);
  }

  // .
  static sigmoid(x) {

    return 1 / (1 + Math.pow(Math.E, -x));
  }
};
