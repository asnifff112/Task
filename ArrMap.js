// let user = [
//     {name : "asnif" , age : 18},
//     {name : "salman" , age : 18 }
// ]

// let details = user.filter(user => user);
// console.log(details);


// let person = [

//     {name : "asnif",
//      age  : 18,
//      mark : 250   
//     },
//     {
//         name : "salman",
//         age  : 20,
//         mark : 260
//     },
//     {
//         name : "nafila ",
//         age  : 19,
//         mark : 269
//     }

// ];

// let total = person.filter(person => person.age >=19);
// console.log(total);

function fun(){
    let arr = 10

    function inner(){
        console.log(arr);
       return arr
    }
   return inner()
}
let result = fun()
console.log(result)

