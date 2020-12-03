const Assignment = require("./assignment");

var assignment = new Assignment();

function printReverse(str){
    console.log(`Reversing string ${str}`);
    var reverse = assignment.reverse(str);
    console.log("Result in "+reverse);
}

function printIsPalindrome(str){
    console.log(`Checks string ${str} is pallindrome`);
    var isPallindrome = assignment.isPalindrome(str);
    console.log("Result is "+isPallindrome);
}

async function getUserById(id){
    console.log(`Find user having id  ${id}`);
    var user = await assignment.getUserById(id);
    console.log("Result is "+user);
}

async function getAllUsers(limit){
    console.log(`Get top ${limit} users `);
    var users = await assignment.getAllUsers(limit);
    console.log(`Result is`,users);
}

(async function (){
    console.log('*************************');
    printReverse('reverse');
    console.log('*************************');
    printIsPalindrome('nitin');
    console.log('*************************');
    await getUserById(1);
    console.log('*************************');
    await getAllUsers(2);
})();
