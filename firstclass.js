/* -> functione varibale assign  cheyyan pattum 
   -> function functionte argumnent aye nalkan pattum 
   -> function-ne return cheyyam from anthor function
   -> function-ne objecti-lum arrayilum store cheyyan sadekkum
   */

   // functione variable vech example

   let fun = function (){
    console.log("hello asnif");
    
   }
   fun()

   // functione array il store cheyyunnu 

   let Arr = [
    function (){console.log("hello sslman"); },
    function (){console.log("hello nafilaaa"); }
   ];

   Arr[0]()
   Arr[1]()

   //objectil functione store cheyyam 

   let obj = {
      fun : function (){
        console.log("hellooooooooooooooo asniffffffffffff");
        
      }
   }

   obj.fun()

   // oru functione argument aye kodukkal 

   function handle(fn){
    fn()
   }

   handle(function(){
    console.log("functionte ullil ulla function");
   });

   // functione return cheyyuka 

   function outerfun(){
    return function (){
        console.log("this is inner function");
        
    };
   }

 let result = outerfun()

 result();

 // set time outil function pass cheyyuka

 setTimeout(function(){
    console.log("5 second kazenju");   
 },5000);

