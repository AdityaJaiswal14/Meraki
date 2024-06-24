import JWT from "jsonwebtoken"


const jwtAuth = (req, res, next) => {
  //console.log(req.cookies.token)
  const token = (req.cookies && req.cookies.token) || null;
  if (!token) {
    console.log("token not found");
    return res.status(400).json({ success: false, message: "NOT authorized" });
  }

  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.user = {id: payload.id, email: payload.email };
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ success: false, message: error.message });
  }
  next();
};

export default jwtAuth