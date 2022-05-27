const jwt = require("jsonwebtoken");

// require auth model
const Auth = require("../model/userStation");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
// user login
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await Auth.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("invalid credentials");
	}
});

// user register
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	console.log(req.body);
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("check your information again!!");
	}

	// check if user exist
	const userExists = await Auth.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error("user already exists try  another email");
	}
	// hash password
	const salt = await bcrypt.genSalt(10);
	const hashpassword = await bcrypt.hash(password, salt);
	// create user
	const user = await Auth.create({
		name,
		email,
		password: hashpassword,
	});
	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("invalid user information");
	}
});

// get my data
const getMyData = asyncHandler(async (req, res) => {

     const {_id, name, email} = await Auth.findById(req.user.id)
     res.status(200).json({
          id: _id,
          name,
          email
     })
	// res.json({ msg: "user data display" });
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
};

module.exports = { registerUser, loginUser, getMyData };
