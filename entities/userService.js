import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService {

     // to create a user
     async createUser(username,phone,password) {
          console.log(password);
          const saltRounds = await bcrypt.genSalt(10);
          const hashedPasswords = await bcrypt.hash(password, saltRounds);
          const user = new User({
               username: username, 
               phone: phone, 
               password: hashedPasswords
          });
          return await user.save();
     }

     // find by username
     async findByUsername(username){
          return await User.findOne({username: username});
     }

     async findByMobileNumber(mobileNumber){
          return await User.findOne({phone: mobileNumber});
     }

     async loginUser(username, password) {
          const user = await User.findOne({username: username});

          const passwordMatch = await user.comparePassword(password);

          if(!passwordMatch) return;
          return jwt.sign({userId: user._id, username: user.username, phone: user.phone},process.env.SECRET_KEY, {expiresIn: '2 days'});
     }

     async verifyToken(token) {
          const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
          const user = await User.findById(decodedToken.userId);
          return user.username;
     }

     async getAllUsers() {
          const users = await User.find();
          return users;
     }

     async updateUserRole(username, role){
          await User.findOneAndUpdate({username: username}, {role: role});
          const user = await User.findOne({username: username});
          return user;
     }
}

export default new UserService();