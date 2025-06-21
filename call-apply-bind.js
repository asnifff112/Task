let mem1 = {
    firstname : "asnif",
    lastname  : "asiii",
    fullname  : function (home , state) {
        console.log(this.firstname + " " + this.lastname + " from " + home + " , " + state);  
    }
}

// mem1.fullname()

let mem2 = {
    firstname : "muhammed",
    lastname  : "anshif",
}

///   call method  ///.........

mem1.fullname.call(mem2,"parappanagadi","kerala")

/// apply  method  ///........

let mem3 = {
    firstname : "Mr",
    lastname  : "salman",
}

mem1.fullname.apply(mem3 , ["parappanagadi","kerala"] )