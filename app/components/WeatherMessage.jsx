var React = require('react');

// var WeatherMessage = React.createClass({
//
//   render:function(){
//     var {location,temp} = this.props;
//     return(
//       <div>
//         <p>
//         It is {temp}&#8451; in {location}.
//         </p>
//       </div>
//     );
//   }
// });

//stateless component
// var WeatherMessage = (props) => {
//   var {location,temp} = props;
//   return(
//     <div>
//       <p>
//       It is {temp}&#8451; in {location}.
//       </p>
//     </div>
//   );
// }

//using es6 destructuring
var WeatherMessage = ({location,temp}) => {
  return(
    <div>
      <p>
      It is {temp}&#8451; in {location}.
      </p>
    </div>
  );
}
module.exports = WeatherMessage;
