const router = require("express").Router();

const {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	removeFriend,
} = require("../../controllers/user-controller");

// retrieve all users // GET and POST
router.route("/").get(getAllUsers).post(createUser);

// retrieve users by id // GET, PUT and DELETE
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router
	.route("/:userId/friends/:friendsId")
	.post(addFriend)
	.delete(removeFriend);

module.exports = router;
