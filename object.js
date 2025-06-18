// let person = {
//     name : "asnif",
//     age  : 18,
//     place: "parappanagadi" 
// };
// person.name = "anshif" ;
// person.pincode= 676319 ;
// console.log(person);


let student = {
    name: "Martin",
    class: "12th",
    section: "A",

    studentDetails: function () {
        return this.name + " " + this.class
            + " " + this.section + " ";
    }
};

let obj={
    name:"anything",
    class:"11th",
    section:"B"
}
student.studentDetails.call(obj)
console.log(obj.studentDetails());

console.log("hai")

