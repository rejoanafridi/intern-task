const express = require("express");

const router = express.Router();

const {
	getStation,
	postStation,
	updateStation,
	deleteStation,
} = require("../controller/serverControler");



// nested route for get and post
router.route("/").get(getStation).post(postStation);

// nested route for update and delete
router.route("/:id").put(updateStation).delete(deleteStation);

module.exports = router;
