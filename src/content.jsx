var React = require('react');

module.exports = React.createClass({
  render:function(){
    return <div className='col-9' id={this.props.id}>
    <h2>{this.props.title}</h2>
    {this.props.text}</div>
  }
});
