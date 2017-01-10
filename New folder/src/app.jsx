var React = require('react');
content= require('./content');

var options = {
    title:"React Conversion",
    text:'This is the start of the conversion to using the React Language - it appears to be going fairly well so far - but the real difficulty will be in adding mulitiple bits of\
      content thats tomorrows task',
    id:'React-conversion'
  }
;


var element = React.createElement(content, options);
React.render(element, document.querySelector('.container'));
