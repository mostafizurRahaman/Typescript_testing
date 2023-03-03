// function add(num1: number, num2: number):{num1:number, num2:number}{
//    return {num1, num2}
// }

// const result:{num1:number, num2:number} = add(19, 39); 
// console.log(result); 

function add(first:string, last:string):string{
   return first + " " + last; 
}


const fullName : string = add("Mostafiz", "Rahaman"); 
console.log(fullName); 
