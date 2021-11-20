var React = require('react');

var Header = require('./shared/header');
var Footer = require('./shared/footer');
var HomeLogin = require('./home-login');

function Home(props) {
  return <>
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      </head>
      <body>
        <div className="container">
          {
            <Header 
              userName={props.userName} 
              userLoged={props.userLoged}
              homeName={props.homeName}
              descriptionName={props.descriptionName}
              peopleName={props.peopleName}
              contactName={props.contactName}
              technologiesName={props.technologiesName} />
          }
          {
            <HomeLogin userName={props.userName} userLoged={props.userLoged} />
          }
          <Footer className="row justify-content-end"></Footer>
        </div>
      </body>
    </html>

  </>
}

module.exports = Home;