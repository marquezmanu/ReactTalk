var MyComponentWithoutJSX = React.createClass({
  displayName: 'MyComponentWithoutJSX',
  render: function() {
    return (
      React.createElement('div', null,
        React.createElement('h1', null, 'Without JSX'),
        React.createElement('p', null, this.props.text)
      )
    );
  }
});

React.render(
  React.createElement(MyComponentWithoutJSX, { text : 'some text here '}), 
  document.getElementById('withoutJSX')
);
