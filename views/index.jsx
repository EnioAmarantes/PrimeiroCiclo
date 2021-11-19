var React = require('react');

var Header = require('./shared/header');
var Footer = require('./shared/footer');
var HomeLogin = require('./login');

function Home(props) {
  if (1 != 1) {
    return <HomeLogin></HomeLogin>
  } else {
    return <>
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        </head>
        <body>
          <div className="container">
          <Header></Header>
          <div>página do sistema - {props.name}</div>
          <Footer className="row justify-content-end"></Footer>
          </div>
        </body>
      </html>

    </>

  }
}

module.exports = Home;