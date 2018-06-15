'use strict';

const request = require('request');

const str = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Indianapolis',
             'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
             'Austin', 'Jacksonville', 'San Francisco', 'Washington', 'Fort Worth'];

const http_begin = 'http://maps.googleapis.com/maps/api/distancematrix/json?origins=';
const http_midle = '&destinations=';
const http_end = '&mode=driving';

const fn1 = (data, callback, name1, name2) => request(http_begin + str[name1] + http_midle + str[name2] + http_end, { json: true }, (err, res, body) => {
	if (err) { return console.log(err); }
	if(!data[name1]) data[name1] = [];
	console.log(str[name1] + '\n' + str[name2] + '\n' + body.rows[0].elements[0].distance.text + '\n');
	//console.dir(body, 8);
});

const obj = [];

const http = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

const fn2 = (data, name1) => request(http + str[name1], { json: true }, (err, res, body) => {
	if (err) { return console.log(err); }
	if(!data[name1]) data[name1] = [];
	console.log(str[name1] + '\n');
	console.log(body.results[0].geometry.location.lat + ' ' + body.results[0].geometry.location.lng);
	//return body.results[0].geometry.location;
});
for(let i = 0; i < 15; i++)
	fn2({}, i);
/*fn1(obj, ()=>{}, 8, 11);
fn1(obj, ()=>{}, 8, 13);
fn1(obj, ()=>{}, 8, 14);
fn1(obj, ()=>{}, 9, 14);
fn1(obj, ()=>{}, 9, 12);
fn1(obj, ()=>{}, 9, 10);
fn1(obj, ()=>{}, 10, 12);
fn1(obj, ()=>{}, 10, 14);
fn1(obj, ()=>{}, 11, 13);
fn1(obj, ()=>{}, 11, 12);
fn1(obj, ()=>{}, 12, 13);
fn1(obj, ()=>{}, 4, 5);
fn1(obj, ()=>{}, 4, 7);
fn1(obj, ()=>{}, 4, 8);
fn1(obj, ()=>{}, 4, 9);
fn1(obj, ()=>{}, 4, 11);
fn1(obj, ()=>{}, 4, 12);
fn1(obj, ()=>{}, 4, 13);
fn1(obj, ()=>{}, 5, 13);
fn1(obj, ()=>{}, 5, 11);
fn1(obj, ()=>{}, 5, 8);
fn1(obj, ()=>{}, 5, 9);
fn1(obj, ()=>{}, 6, 7);
fn1(obj, ()=>{}, 6, 9);
fn1(obj, ()=>{}, 6, 10);
fn1(obj, ()=>{}, 6, 12);
fn1(obj, ()=>{}, 7, 14);
fn1(obj, ()=>{}, 7, 12);
fn1(obj, ()=>{}, 7, 10);
fn1(obj, ()=>{}, 7, 9);
fn1(obj, ()=>{}, 7, 8);
fn1(obj, ()=>{}, 0, 1);
fn1(obj, ()=>{}, 0, 2);
fn1(obj, ()=>{}, 0, 3);
fn1(obj, ()=>{}, 0, 4);
fn1(obj, ()=>{}, 0, 5);
fn1(obj, ()=>{}, 0, 8);
fn1(obj, ()=>{}, 0, 14);
fn1(obj, ()=>{}, 1, 2);
fn1(obj, ()=>{}, 1, 4);
fn1(obj, ()=>{}, 1, 6);
fn1(obj, ()=>{}, 1, 7);
fn1(obj, ()=>{}, 1, 9);
fn1(obj, ()=>{}, 1, 10);
fn1(obj, ()=>{}, 1, 12);
fn1(obj, ()=>{}, 1, 13);
fn1(obj, ()=>{}, 1, 14);
fn1(obj, ()=>{}, 2, 3);
fn1(obj, ()=>{}, 2, 4);
fn1(obj, ()=>{}, 2, 6);
fn1(obj, ()=>{}, 2, 7);
fn1(obj, ()=>{}, 2, 8);
fn1(obj, ()=>{}, 2, 11);
fn1(obj, ()=>{}, 2, 12);
fn1(obj, ()=>{}, 2, 13);
fn1(obj, ()=>{}, 2, 14);
fn1(obj, ()=>{}, 3, 4);
fn1(obj, ()=>{}, 3, 6);
fn1(obj, ()=>{}, 3, 7);
fn1(obj, ()=>{}, 3, 8);
fn1(obj, ()=>{}, 3, 10);
fn1(obj, ()=>{}, 3, 11);
fn1(obj, ()=>{}, 3, 13);
fn1(obj, ()=>{}, 3, 14);*/