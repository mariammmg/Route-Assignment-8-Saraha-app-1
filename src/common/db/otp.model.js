import { Schema,model } from "mongoose";


const schema = new Schema(
  {
   code:{
    type:String,
    required:true
   } ,
   userId:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
   },
   expiredAt:{
    type:Date,
    required:true,
    //After this date with :00 (Time) the otp will be deleted from the DB
    index:{expires:0}
   }
  },
  {
    timestamps: true,
  }

);

export const Otp = model("Otp", schema);

