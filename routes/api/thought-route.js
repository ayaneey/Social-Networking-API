const router = require("express").Router();

const {
	getAllThoughts,
	getThoughtById,
	createThought,
	updateThought,
	removeThought,
	addReaction,
	deleteReaction,
} = require("../../controllers/thought-controller");

// retrieve all thoughts // GET and POST
router.route("/").get(getAllThoughts).post(createThought);

// retrieve thoughts by id // GET, PUT and DELETE
router
	.route("/:id")
	.get(getThoughtById)
	.put(updateThought)
	.delete(removeThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
