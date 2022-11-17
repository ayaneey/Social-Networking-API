const { Thought, User } = require("../models");

const thoughtController = {
	// gathering all user thoughts
	getAllThoughts(req, res) {
		Thought.find()
			.then((thought) => res.json(thought))
			.catch((err) => res.status(500).json(err));
	},
};

// retrieving a thought by its id
getThoughtById({ params }, res);
{
	Thought.findOne({ _id: params.thoughtId })
		.then((dbThoughtData) => {
			if (!dbThoughtData) {
				res.status(404).json({ message: "No thought with this id exists!" });
				return;
			}
			res.json(dbThoughtData);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
}

// assigning new thought to user
createThought({ body }, res);
{
	Thought.create({ thoughtText: body.thoughtText, username: body.username })
		.then(({ _id }) =>
			User.findOneAndUpdate(
				{ _id: body.userId },
				{ $push: { thoughts: _id } },
				{ new: true }
			)
		)
		.then((dbThoughtData) => res.json(dbThoughtData))
		.catch((err) => res.status(400).json(err));
}
