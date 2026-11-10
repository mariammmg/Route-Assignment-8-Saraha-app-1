import e from "express"
import {Otp} from "../../common/db/otp.model.js"

export async function createOtp(code,userId,expiredAt){
    const otp = new Otp({
        code,
        userId,
        expiredAt
    })
   return await otp.save()
}
export async function findOtpByUserId(userId)
{
    const otp =await Otp.findOne(
      {
        userId
      }
    )
    return otp
}
export async function deleteOtp(id){
 return await Otp.deleteOne({userId:id})
}
export async function deleteAllOtps(id){
 return await Otp.deleteMany({userId:id})
}