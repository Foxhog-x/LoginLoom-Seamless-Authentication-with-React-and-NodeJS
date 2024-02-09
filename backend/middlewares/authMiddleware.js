const jwt = require("jsonwebtoken");
const authorizationJwt = (req, res, next) => {
  let reqToken = req.header("authorization");
  let token = reqToken && reqToken.split(" ")[1];
  if (token === null) res.sendStatus(401);
  jwt.verify(token, process.env.SECRET_JWT, (Error, success) => {
    if (Error) {
      console.log(Error);
      res.sendStatus(403);
    }
    console.log(success);
    if (success) {
      next();
    }
  });
};
module.exports = authorizationJwt;
