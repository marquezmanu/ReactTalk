var div = React.DOM.div;
var p = React.DOM.p;
var h1 = React.DOM.h1;

var MyComponentWithoutJSX = React.createClass({
  displayName: 'MyComponentWithoutJSX_alternative',
  render: function() {
    return (
      div(null, 
        h1(null, 'Without JSX alternative'),
        p(null, this.props.text)
      )
    );
  }
});

React.render(
  React.createElement(MyComponentWithoutJSX, { text : 'some text here '}), 
  document.getElementById('withoutJSX_alternative')
);
