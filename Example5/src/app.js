var MyComponentJSX = React.createClass({
  render: function(){
    return (
      <div>
        <h1>With JSX</h1>
        <p>{this.props.text}</p>
      </div>
    )
  }
});

React.render(
  <MyComponentJSX text='some text here' />, 
  document.getElementById('withJSX')
);
