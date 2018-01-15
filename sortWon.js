'use strict';

const sortWon = (arr) => {

  function compareWon(personA, personB) {
    return personB.won - personA.won;
  }
  arr.sort(compareWon);
  return arr;
};

module.exports = sortWon;
