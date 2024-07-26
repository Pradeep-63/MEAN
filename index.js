const length=require('./length');
const trim=require('./trim');
const charAt=require('./charAt');
const concat=require('./concat');
const toLowerCase=require('./toLowerCase');
const toUppercase=require('./toUpperCase');
const split=require('./split');
const includes=require('./includes');
const IndexOf=require('./indexof')
length("hello world");
trim(' hello world  ');
charAt("hello world");
concat("hello","world");
toLowerCase("HELLO WORLD");
toUppercase("hello world");
split("hello");
includes('hello, world!');
IndexOf("hello, world!");
