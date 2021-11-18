var React = require('react');

function Error(props){
return <div class="container-fluid">
      <h1>Testando</h1>
    <h1>{props.message}</h1>
    <h2>{props.error.status}</h2>
    <pre>{props.error.stack}</pre>
    </div>
}

module.exports = Error;