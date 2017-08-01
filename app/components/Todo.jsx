var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = 'created at: ';
      var timestamp = createdAt;

      if(completed) {
        message = 'completed at: ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYY @ h:mm a');
    };
    return(
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type='checkbox' checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
