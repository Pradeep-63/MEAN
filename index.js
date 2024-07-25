require('dotenv').config();
console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);
const filter=require("./filter")
const concat=require("./concat");
const find=require("./find");
const foreach=require("./foreach")
const length=require("./length");
const includes=require('./includes')
const findIndex=require("./findindex")
const map=require("./map");
const pop=require("./pop");
const push=require("./push");
const shift=require("./shift");
const unshift=require("./unshift")
const slice=require("./slice");
const splice=require('./splice');
const sumOfNumber=require('./sumOfNumber');
const distictArray=require('./distinctArray')
concat();
filter();
find();
foreach();
length();
findIndex();
includes();
map();
push();
pop();
shift();
unshift();
slice();
splice();
const arr=[
    {
      type:'flower',
      name:'a'
    },
    {
      type:'flower',
      name:'a'
    },
    {
      type:'fruit',
      name:'mango'
    },
  {
      type:'fruit',
      name:'apple'
    },
  ];
distictArray(arr)
const ans=sumOfNumber("1234");
console.log(ans);


