var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

const jwt = require('jsonwebtoken');
const SECRET = 'batatinhafrita123';
const blacklist = [];

router.use(cookieParser());
router.use(express.json());

router.post('/login', function(req, res) {
  let user = req.body.user;

  if((user === 'enio' && req.body.password === '123') 
      || user  === 'admin' && req.body.password === '123'){
      const token = jwt.sign({userLoged: 1, userName: req.body.user}, SECRET, {expiresIn: 300 });
      res.cookie("token", token).redirect('/');
  }
  
  res.status(401).end();
})
/* GET home page. */
router.get('/', verifyLoged, function(req, res, next) {
  res.render('index', {userLoged: req.userLoged, userName: req.userName});
});

/* GET home page. */
router.get('/technologies', verifyLoged, function(req, res, next) {
  res.render('./technologies', {userLoged: req.userLoged, userName: req.userName});
});

/* GET home page. */
router.get('/peoples', verifyLoged, function(req, res, next) {
  res.render('./peoples', {userLoged: req.userLoged, userName: req.userName});
});

/* GET home page. */
router.get('/contacts', verifyLoged, function(req, res, next) {
  res.render('./contacts', {userLoged: req.userLoged, userName: req.userName});
});

/* GET home page. */
router.get('/description', verifyLoged, function(req, res, next) {
  res.render('./description', {userLoged: req.userLoged, userName: req.userName});
});

/* GET home page. */
router.get('/configurations', verifyJWT, function(req, res, next) {
  res.render('./configurations', {userLoged: req.userLoged, userName: req.userName});
});

router.get('/logout', (req, res) => {
  blacklist.push(req.cookies.token);
  res.clearCookie('token').redirect('/');
});

function verifyJWT(req, res, next) {
  const token = req.cookies.token;
  const index = blacklist.findIndex(item => item === token);
  if(index !== -1) return res.status(401).send("Essa página precisa estar logado para acessar.").end();

  jwt.verify(token, SECRET, (err, decoded) => {
      if(err) return res.status(401).send("Essa página precisa estar logado para acessar.").end();

      req.userLoged = decoded.userLoged;
      req.userName = decoded.userName;
      next();
  });
}

function verifyLoged(req, res, next){
  const token = req.cookies.token;
  const index = blacklist.findIndex(item => item === token);

  if(index !== -1){
    req.userLoged = 0;
    req.userName = "";
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if(err) {
      req.userLoged = 0;
      req.userName = "";
    }else {
      req.userLoged = decoded.userLoged;
      req.userName = decoded.userName;
    }
  });

  next();
}

module.exports = router;
