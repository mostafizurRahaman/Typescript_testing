//  interface declaration for user object :
interface User {
   name: string;
   email: string;
   age?: number;
   friends: {
      name: string;
   }[];
}

//  here we user null properties :
let user: User | null = null;

// option declaration :
user = {
   name: "Mostafizur Rahaman",
   email: "fahim654326@gmail.com",
   age: 20,
   friends: [{ name: "Ratan" }, { name: "Ratul" }, { name: "Rakib" }],
};

//  Non null assertion :
user.age = user.age! + 7;

//  optional Chaining :
user.friends = user.friends?.map((f) => {
   const name: string = f.name.toUpperCase();
   return { name };
});
console.log(user);
