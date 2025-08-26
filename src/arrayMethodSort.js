'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultComparator = (a, b) => {
      return String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
    };

    const cmp =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultComparator;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (cmp(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
