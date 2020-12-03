var User = require('./user');


class Assignment {

    constructor(){
        console.log('Assignment')
    }

    /**
     * To log a string
     * @param {String} str - string to log
     */
    logger(str){
        console.log(str)
    }
    
    /**
     * Reverse the string
     * @param {String} value - string provided for reverse
     * @returns {String}
     */
    reverse(value){
        return(value.split("").reverse().join(""));
    }

     /**
     * Checks weather string is palindrome or not
     * @param {String} string - string provided for palindrome check
     * @returns {Boolean}
     */
    isPalindrome(string){
        string = string.toUpperCase();
        return(string == this.reverse(string));
    }

    /**
     * To get user on basis of userId
     * @param {Number} userId - id of user
     * @returns {String}
     */
    getUserById(userId) {
        return User.findById(userId)
        .then((user)=>{
            if (user.name) {
                return `Hello, ${user.name}!`;
              }
                return 'Hello!';
        })
        .catch(()=>{
            throw new Error(`No user found for id ${userId}`);
        })     
    }

    /**
     * To get all users
     * Result returns in 5 second
     * @param {Number} limit - limit to get uesrs  
     * @returns {Array}
     */
    async getAllUsers(limit){
        this.logger('Get all users function invoked');
        const users = await User.getAllUsers(limit);
        return users; 
    }


}

module.exports = Assignment;