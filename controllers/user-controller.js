const { User, Thought } = require("../models");

const userController = {
	// gathering all users
	getAllUsers(req, res) {
		User.find()
			.then((dbUserData) => res.json(dbUserData))
			.catch((err) => res.status(500).json(err));
	},
};

// retrieve a user by their id
getUserById({ params }, res);
{
	User.findOne({ _id: params.id })
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user with this id exists!" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
}

// create a new user
createUser(req, res);
{
	User.create(req.body)
		.then((dbUserData) => res.json(dbUserData))
		.catch((err) => {
			console.log(err);
			return res.status(500).json(err);
		});
}

// update a user
updateUser({ params, body }, res);
{
	User.findOneAndUpdate({ _id: params.id }, body, { new: true })
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user matches this id!" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => res.status(400).json(err));
}

// deleting a user
deleteUser({ params }, res);
{
	User.findOneAndDelete({ _id: params.id })
		.then((dbUserData) => {
			if (!dbUserData) {
				res
					.status(404)
					.json({ message: "Sorry, no user with this id exists!" });
				return;
			}
		})
		.then(() => {
			res.json({ message: "User has been successfully deleted!" });
		})
		.catch((err) => res.status(400).json(err));
}

// adding a friend
addFriend({ params }, res);
{
	User.findOneAndUpdate(
		{ _id: params.userId },
		{ $addToSet: { friends: params.friendId } },
		{ new: true, runValidators: true }
	)
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "Sorry no user matches this id!" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => res.json(err));
}

// removing a friend
removeFriend({ params }, res);
{
	User.findOneAndUpdate(
		{ _id: params.id },
		{ $pull: { friends: params.friendId } },
		{ runValidators: true }
	)
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "Sorry, no user matches this id!" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => res.status(400).json(err));
}

module.exports = userController;
