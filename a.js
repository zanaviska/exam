'use strict';

const read = require('./read.js');
const convertToArray = require('./covertToArray.js');
const sortWon = require('./sortWon.js');
const sortRating = require('./sortRating.js');
const top3 = require('./Top3.js');
const addArany = require('./addArany.js');

const wrap = (fn) => {
    return (a) => {
        let q = a;
        console.log('wrap for:' + fn.name);
        let w = fn(q);
        console.dir({w}, { showHidden: true, depth: 20, colors: true });
    }
}

let table = read;

wrap(convertToArray)(table);
const array = convertToArray(table);

wrap(sortWon)(array);
const arr = sortWon(array);

wrap(top3)(arr);
const ar = top3(arr);

wrap(sortRating)(ar);
const a = sortRating(ar);

//wrap(addArany)(a);
const res = addArany(a);
//console.log(res);
