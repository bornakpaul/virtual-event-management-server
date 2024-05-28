import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true,
          unique: true,
     },
     phone: {
          type: Number,
          required: true,
          unique: true,
     },
     role: {
          type: String,
          enum: ['admin', 'user'],
          default: 'user',
     },
     password:{
          type: String,
          required: true,
     }
},{timestamps: true});

userSchema.pre('save', async function(next){
     const user = this;
     if(user.isModified('password')) return next();
     try{
          const salt = await bcrypt.genSalt();
          user.password = bcrypt.hash(user.password, this);
     }catch(err){
          console.log(err);
          next(err);
     }
});

userSchema.methods.comparePassword = async function(password) {
     return bcrypt.compare(password, this.password);
}

const User = mongoose.model('Users', userSchema);

export default User;