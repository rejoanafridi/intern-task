const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Auth = require("../model/userStation");

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			// Get token from header token
			token = req.headers.authorization.split(" ")[1];

			// Verify token no
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			// Get authinticate user from the token
			req.user = await Auth.findById(decoded.id).select("-password");
			next();
		} catch (error) {
			console.log(error);
			res.status(401);
			throw new Error("Not authorized");
		}
	}

	if (!token) {
		res.status(404);
		throw new Error("This is not authorized, token no");
	}
});

module.exports = { protect };
