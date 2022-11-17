const router = require("express").Router();

const {
	getAllThought,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought,
	addReaction,
	deleteReaction,
} = require("../../controllers/thought-controller");

// retrieve all thoughts // GET and POST
router.route("/").get(getAllThought).post(createThought);

// retrieve thoughts by id // GET, PUT and DELETE
router
	.route("/:id")
	.get(getThoughtById)
	.put(updateThought)
	.delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
