var React = require('react');
var content = require('./content');

var options = {
  text:'This is the start of the conversion to using the React Language - it appears to be going fairly well so far - but the real difficulty will be in adding mulitiple bits of\
   content thats tomorrows task',
  id:'React-conversion',
  title:"React Conversion"
};

  var element = React.createElement(content, options);
React.render(element, document.querySelector('.row'));
