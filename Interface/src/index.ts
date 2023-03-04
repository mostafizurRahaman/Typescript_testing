//  Interface One 
interface Friend {
   name: string, 
   isActive: boolean, 
}
// Interface Two: 
// We Can Extends one interface to another interface : 
interface Person extends Friend{
   name: string, 
   age?:number, 
   email: string, 
   isSingle: boolean,
}


const person : Person = {
   name: "M", 
   age: 29, 
   email: 'fahim@gmail.com', 
   isSingle: true, 
   isActive: true, 
}

// Function Signature with interface : 
interface Add {
   (n1:number, n2:number) : number
}

const add:Add = (n1, n2) => n1 + n2; 
console.log(add(2, 3)); 

