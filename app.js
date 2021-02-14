const express = require('express');

const app = express();

app.set('view engine','ejs')

app.get('/',function(req,res) {
  var array = [
    { name: 'hind', age: "25", birth_year: 1995},
    { name: 'ibrahim', age: "26", birth_year: 1994},
    { name: 'saleh', age: "25", birth_year: 1995}
];

  res.render('index',{array:array})
})

app.get('/test', (req,res) => {
    res.render('test',{name:'hind'})
 
})



app.listen(3000, function(req,res) {
    console.log("server running ... ")
})