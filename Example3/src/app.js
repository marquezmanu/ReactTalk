var MyComponent = React.createClass({
  render: function() {
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }
});

React.render(
  <MyComponent name="Manuel" />, 
  document.getElementById('example')
);