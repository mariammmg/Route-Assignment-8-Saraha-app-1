import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    userName: {
      type: String,
      trim: true, 
      required: true,
      minlength: 2,
      maxlength: 20
    },
    
    password: {
      type: String,
      required: function()
      {
        return this.provider==="local"
      }
    },
    email: {
      type: String,
      required: true
    },
    provider:{
      type:String,
      enum:["local","google","facebook"],
      default:"local"
    },
    isVerified:{
      type:Boolean,
      default:false
    },
    isDeleted:{
      type:Boolean,
      default:false
    },
    providerPicPath:
    {
      type:String,
      required:false
    }

  },
  {
    timestamps: true,
  }
);

export const User = model("User", schema);

