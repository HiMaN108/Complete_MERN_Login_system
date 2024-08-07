import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


//auth middleware
export default async function Auth(req, res , next){
 
    try{
      
        // access authroize header to validate request
         const token = req.headers.authorization.split(" ")[1];

        // reterive the user detail for the logged user
       const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

       req.user = decodedToken;
        
       next()

    }catch(error) {
        res.status(401).json ({ error : "Authentication Failed..!"})
    }
}

export function localVariables(req, res , next){
    req.app.locals = {
        OTP : null,
        resetSession : false
   }
   next()
}