var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var nodemailer = require('nodemailer');

require('dotenv').config();

const jwt = require('jsonwebtoken');
const blacklist = [];

router.use(cookieParser());
router.use(express.json());

let transporter = nodemailer.createTransport({
  host: process.env.HOSTMAIL,
  port: process.env.MAILPORT,
  secure: process.env.MAILSSL,
  auth: {
    user: process.env.USERMAIL,
    pass: process.env.PASSMAIL
  }

});

router.post('/login', function (req, res) {
  let user = req.body.user;
  let msgError = '';

  if ((user === process.env.USER && req.body.password === process.env.PASSWORD)) {
    const token = jwt.sign({ userLoged: 1, userName: req.body.user }, process.env.SECRET, { expiresIn: 300 });
    res.cookie("token", token).redirect('/');
  }

  if (user != process.env.USER)
    msgError += ' Usuário inválido';

  if (req.body.password != process.env.PASSWORD)
    msgError += ' Senha inválida';

  res.status(401).render('./shared/errorExpected', { errorMessage: msgError });
})

router.post('/sendmail', function (req, res) {
  let userEmail = req.body.nome + '<' + req.body.email + '>';
  let assunto = req.body.assunto;
  let conteudo = req.body.conteudo;

  transporter.sendMail({
    from: userEmail,
    to: process.env.USERMAIL,
    subject: assunto,
    text: conteudo
  }).then(message => {
    console.log(message);
    res.redirect('./contacts');
  }).catch(err => {
    res.cookie()
    .cookie()
    .render('./shared/errorExpected', {errorMessage: err});
  })

})

router.post('/updateconfig', function(req, res){
  let homeName = req.body.homeName;
  let descriptionName = req.body.descriptionName;
  let peopleName = req.body.peopleName;
  let contactName = req.body.contactName;
  let technologiesName = req.body.technologiesName;

  res.cookie("homeName", homeName)
  .cookie("descriptionName", descriptionName)
  .cookie("peopleName", peopleName)
  .cookie("contactName", contactName)
  .cookie("technologiesName", technologiesName)
  .redirect('/configurations');
});

/* GET home page. */
router.get('/', verifyLoged, setCookies, function (req, res, next) {
  res.render('index', { 
    userLoged: req.userLoged, 
    userName: req.userName, 
    homeName: req.cookies.homeName,
    descriptionName: req.cookies.descriptionName,
    peopleName: req.cookies.peopleName,
    contactName: req.cookies.contactName,
    technologiesName: req.cookies.technologiesName
  });
});

/* GET home page. */
router.get('/technologies', verifyLoged, function (req, res, next) {
  res.render('./technologies', { 
    userLoged: req.userLoged, 
    userName: req.userName, 
    homeName: req.cookies.homeName,
    descriptionName: req.cookies.descriptionName,
    peopleName: req.cookies.peopleName,
    contactName: req.cookies.contactName,
    technologiesName: req.cookies.technologiesName
  });
});

/* GET home page. */
router.get('/peoples', verifyLoged, function (req, res, next) {
  res.render('./peoples', { 
    userLoged: req.userLoged, 
    userName: req.userName, 
    homeName: req.cookies.homeName,
    descriptionName: req.cookies.descriptionName,
    peopleName: req.cookies.peopleName,
    contactName: req.cookies.contactName,
    technologiesName: req.cookies.technologiesName
  });
});

/* GET home page. */
router.get('/contacts', verifyLoged, function (req, res, next) {
  res.render('./contacts', { 
    userLoged: req.userLoged, 
    userName: req.userName, 
    homeName: req.cookies.homeName,
    descriptionName: req.cookies.descriptionName,
    peopleName: req.cookies.peopleName,
    contactName: req.cookies.contactName,
    technologiesName: req.cookies.technologiesName
  });
});

/* GET home page. */
router.get('/description', verifyLoged, function (req, res, next) {
  res.render('./description', { 
    userLoged: req.userLoged, 
    userName: req.userName, 
    homeName: req.cookies.homeName,
    descriptionName: req.cookies.descriptionName,
    peopleName: req.cookies.peopleName,
    contactName: req.cookies.contactName,
    technologiesName: req.cookies.technologiesName
  });
});

/* GET home page. */
router.get('/configurations', verifyJWT, function (req, res, next) {
  res.render('./configurations', { 
    userLoged: req.userLoged, 
    userName: req.userName, 
    homeName: req.cookies.homeName,
    descriptionName: req.cookies.descriptionName,
    peopleName: req.cookies.peopleName,
    contactName: req.cookies.contactName,
    technologiesName: req.cookies.technologiesName
  });
});

router.get('/logout', (req, res) => {
  blacklist.push(req.cookies.token);
  res.clearCookie('token').redirect('/');
});

router.get('/resetconfig', function(req, res){
  let homeName = process.env.HOME_NAME;
  let descriptionName = process.env.DESCRIPTION_NAME;
  let peopleName = process.env.PEOPLE_NAME;
  let contactName = process.env.CONTACT_NAME;
  let technologiesName = process.env.TECHNOLOGIES_NAME;

  res.clearCookie()
  .cookie("homeName", homeName)
  .cookie("descriptionName", descriptionName)
  .cookie("peopleName", peopleName)
  .cookie("contactName", contactName)
  .cookie("technologiesName", technologiesName)
  .redirect('/configurations');
});

function verifyJWT(req, res, next) {
  const token = req.cookies.token;
  const index = blacklist.findIndex(item => item === token);
  if (index !== -1) return res.status(401).send("Essa página precisa estar logado para acessar.").end();

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).send("Essa página precisa estar logado para acessar.").end();

    req.userLoged = decoded.userLoged;
    req.userName = decoded.userName;
    next();
  });
}

function verifyLoged(req, res, next) {
  const token = req.cookies.token;
  const index = blacklist.findIndex(item => item === token);

  if (index !== -1) {
    req.userLoged = 0;
    req.userName = "";
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      req.userLoged = 0;
      req.userName = "";
    } else {
      req.userLoged = decoded.userLoged;
      req.userName = decoded.userName;
    }
  });

  next();
}

function setCookies(req, res, next){

  if(req.cookies != null && req.cookies != undefined){
    homeName = req.cookies.homeName == (undefined || null) ? process.env.HOME_NAME : req.cookies.homeName;
    descriptionName = req.cookies.descriptionName == (undefined || null) ? process.env.DESCRIPTION_NAME : req.cookies.descriptionName;
    peopleName = req.cookies.peopleName == (undefined || null) ? process.env.PEOPLE_NAME : req.cookies.peopleName;
    contactName= req.cookies.contactName == (undefined || null) ? process.env.CONTACT_NAME : req.cookies.contactName;
    technologiesName = req.cookies.technologiesName == (undefined || null) ? process.env.TECHNOLOGIES_NAME : req.cookies.technologiesName;
  }

  res.cookie("homeName", homeName);
  res.cookie("descriptionName", descriptionName);
  res.cookie("peopleName", peopleName);
  res.cookie("contactName", contactName);
  res.cookie("technologiesName", technologiesName);

  next()
}

module.exports = router;
