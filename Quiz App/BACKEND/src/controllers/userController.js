import User from "../models/userModel.js";
import { hash,compare } from "bcrypt";
import { COOKIE_NAME } from "../utils/constants.js";
import { createToken } from "../utils/token-manager.js";
import jwt from "jsonwebtoken"

const generateToken = (user) => {
  console.log(user.username)
  const token = jwt.sign({ "id": user._id , email:user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

export const userSignup = async (req, res) => {
  try {
    //user signup
    const {firstname, lastname, email, password}= req.body
    const existingUser = await User.findOne({ email })
    if(existingUser) return res.status(401).send("User already exists")
    const hashedPassword= await hash(password, 10)
    const user = new User({firstname, lastname, email, password:hashedPassword})
    const doc = await user.save()
    console.log(doc)

    // res.clearCookie(COOKIE_NAME, {
    //   httpOnly: true,
    //   domain: "localhost",
    //   signed: true,
    //   path: "/",
    // });

    // const token = createToken(user._id.toString(), user.email, "1d");
    // const expires = new Date();
    // expires.setDate(expires.getDate() + 1);
    // res.cookie(COOKIE_NAME, token, {
    //   path: "/",
    //   domain: "localhost",
    //   expires,
    //   httpOnly: true,
    //   signed: true,
    // });
    
    return res.status(201).json({message: "OK", firstname: user.firstname, lastname: user.lastname, email: user.email })
  } catch (error) {
    console.log(error)
    return res.status(200).json({message: "ERROR", cause: error.message}) 
  }  
}

export const userLogin = async (req,res) => {
  try {
    //user login
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("User not registered");
    }
    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(403).send("Incorrect Password");
    }

    // res.clearCookie(COOKIE_NAME, {
    //   httpOnly: true,
    //   domain: "localhost",
    //   signed: true,
    //   path: "/",
    // });
    
    // const token = createToken(user._id.toString(), user.email, "1d");
    // const expires = new Date();
    // expires.setDate(expires.getDate() + 1);
    // res.cookie(COOKIE_NAME, token, {
    //   path: "/",
    //   domain: "localhost",
    //   expires,
    //   httpOnly: true,
    //   signed: true,
    // });
    const token = generateToken(user)
        const cookieOption = {
          maxAge: 24 * 60 * 60 * 1000, //24hr
          httpOnly: true ,
          sameSite : "none",
          secure: true
        };

    res.cookie("token",token,cookieOption)
    console.log(token)
    return res
      .status(200)
      .json({ message: "OK", firstname: user.firstname, email: user.email });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
