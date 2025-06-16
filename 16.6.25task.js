let products = [
    {name : "A" , price : 200},
     {name : "B" , price : 100},
      {name : "C" , price : 150},
       {name : "D" , price : 200},
];


/// ascending order

let result = products.sort((a1,b2) =>  a1.price - b2.price ,0)
console.log(result);


///  total price  /// .....

let sum = 0
 products.forEach((item)=>{
   sum = sum + item.price
});
console.log(sum);  // out put : 650




