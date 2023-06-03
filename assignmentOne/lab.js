class Hamster {
    constructor(name){
        this.owner="";
        this.name=name;
        this.price=15;
    }
    wheelRun(){
        console.log('squeak squeak');
    }
    eatFood(){
        console.log('nibble nibble');
    }
    getPrice(){
        return this.price
    }
}

class Person{
    constructor(name,){
        this.name=name
        this.age=0;
        this.height=0;
        this.weight=0;
        this.mood=0;
        this.hamsters=[];
        this.bankAccount=0;
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hello, my name i ${this.name}. It's very nice to meet you`);
    }
    eat(numberOfMeals){
        this.weight=this.weight+numberOfMeals;
        this.mood=this.mood+(Math.floor(numberOfMeals/2))
    }
    exercise(hoursExercised){
        this.weight=this.weight-hoursExercised
    }
    ageUp(years){
        this.age=this.age+years;
        this.height=this.height+(years*1.25);
        this.weight=this.height+(years*.3)
        this.mood=this.mood-(years*.25)
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood=this.mood+10
        this.bankAccount=this.bankAccount-hamster.getPrice()
    }
}
let hamster1=new Hamster("Squeaks'a'lot")
let person1=new Person('Austin');
// person1.eat(3);
// person1.exercise(3);
console.log(person1);
person1.ageUp(5);
console.log(person1);
person1.ageUp(3)
console.log(person1);
person1.buyHamster(hamster1);
console.log(person1);
