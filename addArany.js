'use strict';

const addArany = (arr) => {
  for (const i of arr) {
    i.arany = i.rating / arr[0].rating * 100;
  }
  return arr;
};

module.exports = addArany;
