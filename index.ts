#! /usr/bin/env node
import inquirer from "inquirer"

let user = await inquirer.prompt([
   
    {
         type: "string",
         name: "cardholdername",
         message: "Welcome Hamna",

    },
    
    {
        type: "number",
        name: "pincode",
        message: "enter your 4 digit pincode",

    },


     //creating listing and withdrawl method

     {
         type: "list",
         name: "accountType",
        message: "Select your account type",
        choices: ["current", "saving"],

     },


     //transition type

     {
       type: "list",
       name: "transitionType",
       message: "Select your transition type",
       choices: ["cash", "withdrawl"],

     },

     //selected amount

     {
       type: "list",
       name: "amount",
       message: "Select your amount",
       choices: [1000, 2000, 5000, 10000],
       when(user){
             return user.transitionType === "cash"
       }

     },
     
     {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(user){
            return user.transitionType === "withdrawl"
        }
     },

]);

//final slip

if(user.pincode){
    const balance = Math.floor(Math.random() * 10000 + 1)
    console.log(balance)
    const enteramount = user.amount;

if(enteramount <= balance){
   const remaining = balance - enteramount

   console.log(`you have withdrawl rupees ${enteramount} and your remaining balance ${remaining}`)
}




}


