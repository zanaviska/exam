'use strict';

const convertToArray = (table) => {
  const array = [];
  for (const i in table) {
    array.push(table[i]);
    array[array.length - 1].name = i;
  }
  return array;
};

module.exports = convertToArray;

