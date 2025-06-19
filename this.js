let person = {
    name : "asnif",
    age  : 18,
    greet: function (){
        console.log("hello " + this.name  +  this.age);
        console.log(this.age);
        
    }
}
person.greet()