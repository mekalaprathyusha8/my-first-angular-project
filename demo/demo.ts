class Demo{
    ss = 23
    constructor(private a:string , b:string){
        console.log("Hello World");
    }
    rani(){
        console.log(this.ss)
        console.log(this.a)
    }
}

let d = new Demo("wertead", "werty");
d.rani();

// the constructor arguments will be provide by those who will create the object of the class. and we can use those arguments in the methods of the class.
// if we keep constructor arguments as private then we can only use those arguments in the methods of the class and we cannot access those arguments outside the class. if we keep constructor arguments as public then we can access those arguments outside the class.
//  private aruguments will be converted as a global variable