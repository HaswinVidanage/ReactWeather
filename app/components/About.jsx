var React = require('react');


//use of stateless functional components

// var About = React.createClass({
//   render:function(){
//     return(
//       <div>
//         <h2>About component</h2>
//     </div>
//     );
//   }
// });

/*About component does not manage any state . When we have a component which
only uses a render function we can use a stateless functional component as below*/

// var About = function(props){
//   return(
//     <div>
//       <h2>About component</h2>
//     </div>
//   );
// }

//we can further make is simple with the use of arrow functions as below

var About = (props) => {
  return(
    <div>
      <h2>About component</h2>
    </div>
  );
}
module.exports = About;
