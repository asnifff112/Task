// recursion //.............

// console.log(sum(10))

// function sum(n){
//     if (n<=0) {
//         return 0;
//     }else {
//         return n+sum(n-1)
//     }
// }

//  function //.......


// function number(num1,num2){
//     console.log(num1+num2);
    
// }
// number(2,1)
// number(10,1)

// array concat // .....

// let boys =['asnif','anshif','salman'];
// let girls=['anu','nafila','aysha'];

// let humans = [boys.concat(girls)]

// console.log(humans);


// //  flat // ..........

// let numbers = [[1,2],[3,4],[5,6]];
// console.log(numbers.flat());

// splice /







// for each  //.........

// let arr = [
//     {
//         name :'asnif',
//         mark :90,
//         place:'anappadi',

//     },
//     {
//         name:'anshif',
//         mark:95,
//         place:'nilambur'
//     },
//     {
//         name:'salman',
//         mark:98,
//         place:'kozikkode'
//     }
// ]
// let sum = 0;
// arr.forEach(function(item) {
//    sum = sum + item.mark;
    
// });
// console.log(sum);

//   find  // .........

// let found = arr.find(function(item){
// return item.name==='salman'
// })
// console.log(found);

// let less = arr.find(function(item){
//     return item.mark >= 91
// })
// console.log(less);



//   filter  // ..........



// let arrr = [10,10,13,5,6,7,11,11]

// let found = arrr.filter(function(item){
//     return item<11

// })
// console.log(found);


// map // .......


// let newArr = arr.map(function(item){
//     return item.name + ":passed"
// })
// console.log(newArr);


// let NewArr = arr.map(function(item){
//     return{
//     ...item,
//        country : "india",
//        year    : 2025,
//     }
// })
// console.log(NewArr);

// for of loop  //........

// let Arr =["asnif","anshif","salman"]
// for (let NewArr of Arr){
//     console.log(NewArr);
    
// }


// let numbers = [10,20,30,40,50]
// for(let NewNumbers of numbers){
//     console.log(NewNumbers + 10);
//     }

//     let str = ("aznif");
//     for(let x of str ){
//         console.log(x);
        
//     }


    // for in loop //......

    // let details =
    //     {
    //         name : "asnif",
    //         age  : 18,
    //         mark : 90
    //     }
    

    // for (let key in details){
    //     console.log(`${key} : ${details[key]}`);
        
    // }


    // for in loop with array // ........

    // let Arr =["asnif","anshif","salman"];
    // for(let x in Arr){
    //     console.log(x);
        
    // }







































