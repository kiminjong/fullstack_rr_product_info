var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: '123abc,.',
  port: 5432,
})


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
});

// api get data from postgres
router.get('/getdata', function(req, res, next) {
  //get data
  pool.query('SELECT * FROM product_info', (error, response) => {
    if(error){
      console.log(error);
    }else{
      //console.log(response.rows);
      res.send(response.rows);
    }
    
    //pool.end()
  });

  router.get('/add', function(req, res, next) {
    res.render('add', {});
  });
  router.post('/add', function(req, res, next) {
    var product_name = req.body.product_name;
    var product_price = req.body.product_price;
    var image = req.body.image;
    pool.query("INSERT INTO product_info (product_name, product_price, image) VALUES ($1,$2, $3)",
              [product_name,product_price,image],
              (error,response)=>{
                if(error){
                  res.send(error);
                }else{
                  res.send('da insert du lieu thanh cong ' + product_name + product_price + image);
                }
              })
    
  });

});


module.exports = router;
