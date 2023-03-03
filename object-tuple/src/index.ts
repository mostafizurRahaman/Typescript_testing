let person : {
   name: string, 
   age?: number, 
   isMarried : boolean, 
   friends?:string[]
}; 

person = {
   name: "Mostafizur Rahaman", 
   age: 20, 
   isMarried: true, 
   friends: ["hridoy", "ismail", "rakibul"]
}


person.friends = person.friends?.map(p => p.toUpperCase()); 
console.log(person.friends); 
person.age = person.age! + 5; 
console.log(person); 

