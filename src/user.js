var user = {};

module.exports = user;

var users=[
    {
        id :1,
        name:'First user'
    },
    {
        id :2,
        name:'Second user'
    },
    {
        id:3
    }
]


/**
 * To find user on basis of id
 * @param {Number} id - id of user 
 */
user.findById=function(id){
    return new Promise((resolve,reject)=>{
        const user = users.find(element => element.id == id);

        if(user){
            return resolve(user);
        }
        return reject();
    })
}


/**
 * To get all users
 * @param {Number} limit - limit of users array 
 */
user.getAllUsers=function(limit){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           users.splice(limit) 
           resolve(users);
        },5000)
    })
}

