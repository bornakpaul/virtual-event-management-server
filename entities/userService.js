import { use } from "bcrypt/promises.js";
import User from "../models/user.js";
import bcrypt from 'bcrypt';

class UserService {

     // to create a user
     async createUser(username, phone, password) {
          const saltRounds = await bcrypt.genSalt(10);
          const hashedPasswords = await bcrypt.hash(password,saltRounds);
          const user = new User({
               username: username, 
               phone: phone, 
               password: hashedPasswords
          });
          return await user.save();
     }

     async findByUsername(username){
          return await User.findOne({username: username});
     }

     async findByMobileNumber(mobileNumber){
          return await User.findOne({phone: mobileNumber});
     }

     async loginUser(username, password) {
          const user = await User.findOne({username: username});

          const passwordMatch = await user.comparePassword(password); 
     }
}