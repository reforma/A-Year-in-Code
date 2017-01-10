var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="col-9" id={this.props.id}>
      <div className="thumbnail">
        <div className="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
      </div>
    </div>
  }
});
