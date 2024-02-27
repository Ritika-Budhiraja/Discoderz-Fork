const jwt = require("jsonwebtoken");

const verifyjwt = (req, res, next) => {
  const token = req.headers.jtoken;

  try {
    const user = jwt.verify(token, "Sumanth");
    if (user) {
      req.user = user;
      next();
    } else
      res.json({
        status: 404,
      });
  } catch (e) {
    res.sendStatus(401);
  }
};

module.exports = verifyjwt;
