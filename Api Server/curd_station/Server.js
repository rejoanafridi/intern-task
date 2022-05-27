// http server

const express = require("express");
const app = express();
const path = require("path");
// error handeler
const { errorHandeler } = require("./server/middleware/error");
const dotenv = require("dotenv").config();
// body parser
const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectId;

// const dotenv = require('dotenv')

// require("dotenv".config());
const port = process.env.PORT || 5005;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
// parse application json
app.use(bodyParser.json());

const connectDatabase = require("./server/config/database");
connectDatabase();

// const connectDb = async () => {
// 	try {
// 		await client.connect();
// 		console.log("connected to the database");
// 		const database = await client.db("apistation");
// 		const stationCollection = database.collection("station");

// 		// routing
// 	} catch (error) {
// 		console.log(error);
// 		process.exit(1);
// 	}
// };
// connectDb();
app.use(errorHandeler);

app.use("/api/station/", require("./server/routes/serverRoutes"));

app.listen(port, () =>
	console.log(`server is running on http://localhost:${port}`)
);
