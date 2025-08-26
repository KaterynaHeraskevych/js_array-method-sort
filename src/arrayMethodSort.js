'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const cmp =
      compareFunction ||
      ((a, b) => {
        return String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
      });

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (cmp(this[i], this[j]) < 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
