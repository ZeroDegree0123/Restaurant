module.exports = (req, res, next) => {
  if (!req.user) return res.status(401).json("Unauthorized, You need to be logged in to use this feature");
  next();
};
