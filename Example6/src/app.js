var MyComponent = React.createClass({
  render: function(){
    return (
      <h1>My first component!</h1>
    );
  }
});

React.render(
  <MyComponent />, 
  document.getElementById('container')
);
