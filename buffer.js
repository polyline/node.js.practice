// Buffer module is default in Node.js

// There are three creating methods mainly
var buf_1 = new Buffer(10);
var buf_2 = new Buffer([1,2,3,4,5]);
var buf_3_1 = new Buffer("test");
var buf_3_2 = new Buffer("test", "utf-8");

len = buf_1.write("test");
console.log("written buffer 1: " + len);
console.log("toString buf_3_1: " + buf_3_1.toString());

console.log("length of buf_2: " + buf_2.length);

// There are too many detailed methods. We just need to search how to use it when we need.
