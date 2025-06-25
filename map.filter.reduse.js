// map // 

// let arr = [3,6,1,7,8,10,0] ;

// // let double = [2,4,10,6,8,12] ;

// function double(n){
//     return n*2
// }

// let output = arr.map(double);

// console.log(output);



// filter //


// how to find greater then //

// let arr = [2,3,4,5,7,9,8,10];

// function odd(x){
//     return x>3
// }

// let output = arr.filter(odd)

// console.log(output);


// how to find even number or odde number //

// let arr =[2,4,5,7,9,21,3];

// function even(n){
//     return n % 2 === 0    // (=== 0 find even number)
// }

// let output = arr.filter(even)

// console.log(output);


//  reduse // ........


// sum or max 


    // let total = [1,2,3,4,5,6,7,8,9,10];

    // let output = total.reduce((acc , curr) =>{acc = acc + curr  
    //      return acc });

    // console.log(output);


    // maxxxxxx  // .........


    let arr =[1,3,4,5,6,7,8,9,0]

    let output = arr.reduce(function (max,curr){
        if (curr > max){
           max =curr;
        }
        return max ;
    } , 0);
    console.log(output);
    



    







