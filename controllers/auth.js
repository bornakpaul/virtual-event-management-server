import UserService from "../entities/userService.js";

const register = async function(req, res, next){
     const {username, phone, password} = req.body;
     try{
          const user = await UserService.findByUsername(username);
          if(user){
               return res.status(404).json({message: 'User is already registered'});
          }
          console.log(password);
          await UserService.createUser(username,phone,password);
          return res.status(200).json({message: `${username} was successfully registered`});
     }catch(err){
          console.log(err);
          return res.status(500).json({message: `Error encountered : ${err}`});
     }
}

const login = async function(req, res, next){
     const {username, password} = req.body;
     try{
          const loggedIn = await UserService.loginUser(username, password);
          if(!loggedIn){
               return res.status(404).json({message: 'Username or password is incorrect'});
          }
          console.log(loggedIn);
          return res.status(200).json({message: `${username} was successfully loggedin`, tokken: loggedIn});
     }catch(err){
          console.log(err);
          return res.status(500).json({message: `Error encountered : ${err}`});
     }
}

const getAllUsers = async function(req, res, next){
     try{
          const users =  await UserService.getAllUsers();
          return res.status(200).json({users: users});
     }catch(err){
          console.log(err);
          return res.status(500).json({message: `Error encountered : ${err}`});
     }

}

const updateUserRole = async function(req, res, next){
     const {username , role} = req.body;
     try{
          const updateUser = await UserService.updateUserRole(username, role);
          return res.status(200).json({user: updateUser});
     }catch(err){
          console.log(err);
          return res.status(500).json({message: `Error encountered : ${err}`});
     }
}

export { register, login, getAllUsers, updateUserRole };