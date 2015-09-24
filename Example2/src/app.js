var MyComponent = React.createClass({ 
  render: function() { 
    if (this.props.first) { 
      return <div className="first"><span>A Span</span></div>; 
    } else { 
      return <div className="second"><p>A Paragraph</p></div>; 
    } 
  } 
});

React.render(
  <MyComponent first={true} />,
  document.getElementById('example')
);
