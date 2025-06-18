function sum(n){
    if (n <= 0){
        return 0;
    }else{
        return n + sum(n - 1)
    }
}

console.log(sum(1));


// function multi(n,m){
    
//     if ( n,m <= 0){
//           return 0;
//     }else {

//          return n + m

//     }
// }
// console.log(multi(5,5));


