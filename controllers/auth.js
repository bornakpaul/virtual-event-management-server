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

export { register };