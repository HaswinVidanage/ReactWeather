var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps:function(){
    return{
      title:'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var model = new Foundation.Reveal($('#error-modal'));
    model.open();
  },

  render :function(){
    var {title,message} = this.props;
    return(
      <div id="error-modal" className="text-center tiny reveal" data-reveal="">
          <h4>{title}</h4>

          <p>{message}</p>

          <p>
            <button className="hollow button" data-close="">Okay</button>
          </p>

      </div>
    );
  }
});

module.exports = ErrorModal;
