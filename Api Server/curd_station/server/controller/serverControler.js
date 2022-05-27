// const station = require("../model/station");
const asyncHandler = require("express-async-handler");

const Station = require("../model/station");
// get station name
// @route get/api/station
// access private
const getStation = asyncHandler(async (req, res) => {
	const station = await Station.find();

	res.status(200).json(station);
	// res.send(station);
});

// @route post/api/station
// access private
const postStation = asyncHandler(async (req, res) => {
	console.log(req.body);
	if (!req.body.name) {
		res.status(400);
		throw new Error("please provide a name field");
	}
	const station = await Station.create({
		name: req.body.name,
	});
	res.status(200).json({ message: "post station " });
});

// @route update/api/station
// access private
const updateStation = asyncHandler(async (req, res) => {
	const station = await Station.findById(req.params.id);
	if(!station){
		res.status(400)
		throw new Error("Station item not found");
	}

	const updateStation = await Station.findByIdAndUpdate(req.params.id, req.body,{
		new: true,
	})
	res.status(200).json(updateStation);
});



// @route delete/api/station
// access private

const deleteStation = asyncHandler(async (req, res) => {
	const station = await Station.findById(req.params.id);
	if(!station){
		res.status(400)
		throw new Error("Station item not found");
	}
	await station.remove()

	res.status(200).json({ message: "delete station ", id:req.params.id });
});

module.exports = {
	getStation,
	postStation,
	updateStation,
	deleteStation,
};

// async (req, res) => {
// 	const id = req.params.id;
// 	const updateData = req.body;
// 	const findQuery = { _id: ObjectId(id) };
// 	const findUpdate = await stationCollection.updateOne(
// 		{ findQuery },
// 		{
// 			$set: {
// 				new: req.body,
// 			},
// 		}
// 	);

// 	res.status(200).json({ update: findUpdate });
// });

// async (req, res) => {
// 	const id = req.params.id;

// 	const query = { _id: ObjectId(id) };

// 	const result = await stationCollection.deleteOne(query);

// 	res.status(200).json({
// 		message: `delete curd station server ${req.params.id}`,
// 		result,
// 	});
