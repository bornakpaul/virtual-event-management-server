import UserService from "../entities/userService.js";

const authentication = async function(req, res, next) {
     const token = req.headers.authentication?.split(' ')[1];

     if(!token){
          return res.status(401).json({message: 'Authentication required, token missing'});
     }

     try{
          req.username = await UserService.verifyToken(token);
          console.log(`check username: ${req.username}`);
          next();
     }catch(err){
          res.status(401).json({message: `Token error ${e}`});
     }
}

export  { authentication };