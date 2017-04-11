// //use of a callback
// getTempCallback('Colombo',function(err,temp){
//   if(err){
//     console.log('error',err);
//   }
//   else {
//     console.log('success',temp);
//   }
// });
//
// function getTempCallback (location,callback){
//   callback(undefined,78);
//   callback('city not found');
// }
//
// // Use of promise
// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//     setTimeout(
//       function(){
//         resolve(99);
//         reject('City not found');
//       },2000
//     );
//   });
// }
//
// getTempPromise('Colombo').then(function(temp){
//   console.log('Promise success',temp);
// },function(err){
//   console.log('promise error',err);
// });

//challenge area

function addPromise(a,b){
  return new  Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }
    else{
      reject('A or B or are not numbers');
    }
  });
}

addPromise(10,2).then(function(sum){
  console.log('Promise success - Total : ',sum);
},function(err){
  console.log('Promise Error - ',err);
});
