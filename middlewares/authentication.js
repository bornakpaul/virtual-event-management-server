import UserService from "../services/userService.js";

const authentication = async function(req, res, next) {
     const token = req.headers.authorization?.split(' ')[1];

     if(!token){
          return res.status(401).json({message: 'Authentication required, token missing'});
     }

     try{
          const user = await UserService.verifyToken(token);
          req.username = user.username;
          req.role = user.role;
          console.log(`check username: ${req.username} and role: ${req.role}`);
          next();
     }catch(err){
          res.status(401).json({message: `Token error ${e}`});
     }
}

export  { authentication };