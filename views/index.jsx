var React = require('react');

var Header = require('./shared/header');
var Footer = require('./shared/footer');
var HomeLogin = require('./login');

function Home(props){
  if(1 == 1 ){
    return <HomeLogin></HomeLogin>
  } else {
    return <>
      <Header></Header>
      <div>página do sistema - {props.name}</div>
      <Footer></Footer>
    </>

  }
}

module.exports = Home;