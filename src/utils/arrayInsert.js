/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

const tempArray = [];

/**
 * Insert an item or an array of items to array to a specified index. Mutates
 * the array. The index can be negative in which case the items will be added
 * to the end of the array.
 *
 * @param {Array} array
 * @param {*} items
 * @param {Number} [index=-1]
 */
export default function arrayInsert(array, items, index) {
  let startIndex = typeof index === 'number' ? index : -1;
  if (startIndex < 0) startIndex = array.length - startIndex + 1;

  array.splice(...tempArray.concat(startIndex, 0, items));
  tempArray.length = 0;
}
