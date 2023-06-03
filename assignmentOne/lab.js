// class Hamster {
//     constructor(name){
//         this.owner="";
//         this.name=name;
//         this.price=15;
//     }
//     wheelRun(){
//         console.log('squeak squeak');
//     }
//     eatFood(){
//         console.log('nibble nibble');
//     }
//     getPrice(){
//         return this.price
//     }
// }

// class Person{
//     constructor(name,){
//         this.name=name
//         this.age=0;
//         this.height=0;
//         this.weight=100;
//         this.mood=0;
//         this.hamsters=[];
//         this.bankAccount=0;
//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age;
//     }
//     getWeight(){
//         return this.weight
//     }
//     greet(){
//         //using this syntax with the interpolation didnt seem to work when i passed
//         //methods to objects #{hamster.getPrice()}, but it worked for this.key
//         console.log(`Hello, my name is ${this.name}. It's very nice to meet you`);
//     }
//     eat(numberOfMeals){
//         this.weight=this.weight+numberOfMeals;
//         this.mood=this.mood+(Math.floor(numberOfMeals/3))
//         //i wanted each meal to proportionally increase the person's mood, so i
//         //total number of meals by 2. since this wll return a decimal unless I use 2,
//         //I use the method Math.floor to round down to the nearest integer.
//     }
//     exercise(hoursExercised){
//         this.weight=this.weight-hoursExercised
//     }
//     ageUp(years){
//         //the code on the left is the key, the right is the new value of the key
//         //value pair. The height is increased multiplied by 1.25 so I an allow him
//         //to increase weight nicely, set orignal weight to 100.
//         //mood slowly decreases over the years. The paramaters is years, which i give
//         //when i call the function. the value is this.keyname because that returns the
//         //current value of the key value pair, then it incremenets its.
//         this.age=this.age+years;
//         this.height=this.height+(years*1.25);
//         this.weight=this.weight+(years*.75)
//         this.mood=this.mood-(years*.25)
//     }
//     buyHamster(hamster){
//         this.hamsters.push(hamster)
//         //don't forget, hamster=hamster1 or gus=the object itself.
//         //BUT, this function is called on the person, so this is referring to the person
//         //thus, this.hamsters is referring ot the empty string. so this.hamsters.push(hamster)
//         //will push the whole object onto the array. 
//         this.mood=this.mood+10
//         this.bankAccount=this.bankAccount-hamster.getPrice()
//         //This buy hamster function was interesting. i pass hamster1 or gus into the
//         //hamster parameter, so now hamster=gu=the actual object. so hamster=object
//         //so i set the key value of bankAccount to the current value of the bank account
//         //minus the price of the hamster. I get the price ofthe hamster by remembering that hamstre
//         //paramter is equal to the actual hamster object, so you use dot notation
//         //and pass the method getPrice() that we set in the hamster,on the paramater 
//         ///"hamster" to access the key value. ===> hamster.get()
//     }
// }
// let hamster1=new Hamster("Squeaks'a'lot")
// let person1=new Person('Austin');
// person1.eat(3);
// person1.exercise(3);
// console.log(person1);
// person1.ageUp(5);
// console.log(person1);
// person1.ageUp(3)
// console.log(person1);
// person1.buyHamster(hamster1);
// console.log(person1);
// let timmy= new Person("Timmy")
// timmy.ageUp(5);
// timmy.eat(5)
// console.log(timmy);

// timmy.exercise(5);
// timmy.ageUp(9);
// let gus=new Hamster('Gus')
// gus.owner="Timmy"
// timmy.buyHamster(gus);
// //remember not to pass gus in as a string because gus is an object
// timmy.ageUp(15);
// timmy.eat(2);
// timmy.exercise(2);
// console.log(timmy);



// class Dinner {

// }

// class Chef {

// }


// let object={
//     function: function(){
//         console.log('helllo');
//     },
//     function(){
//         console.log('hellow');
//     }
// }
// //the way to write the function as a method is directly in the object

// console.log(object.function());
// console.log(object.function.function());

/*
You have said in class and i have read onlline that you can achieve the same things
output and more using classes and objects over factory functions. So, in respect to 
not confusing myself when i finally uderstand classes, i am skipping the last question
on this hw assignment

*/