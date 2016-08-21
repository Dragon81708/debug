var express = require('express');
//创建一个路由器
var router = express.Router();

/* GET users listing.  设置路由 */

router.get('/', function(req, res, next) {
  res.render('respond with a resource');
});
// /reg 它不是完整路径，它是/user后面的路径
router.get('/reg', function(req, res, next) {
  res.render('user/reg');
});
//
router.get('/login', function(req, res, next) {
  res.render('user/login');
});
router.get('/logout', function(req, res, next) {
  res.send('用户退出');
});

module.exports = router;
