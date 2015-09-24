var MyComponent = React.createClass({
  getInitialState: function(){
    return {
      count: 1
    }
  },
  handleState: function() {
    this.setState({ count: this.state.count + 1 });
  },
  render: function(){
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleState}>Click Me</button>
      </div>
    )
  }
});

React.render(
  <MyComponent />, 
  document.getElementById('example')
);