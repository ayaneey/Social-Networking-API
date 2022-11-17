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
	Thought.create(body)
		.then(({ _id }) => {
			return User.findOneAndUpdate(
				{ _id: body.userId },
				{ $push: { thoughts: _id } },
				{ new: true }
			);
		})
		.then((dbThoughtData) => {
			if (!dbThoughtData) {
				res.status(404).json({ message: "No user found with this id!" });
				return;
			}
			res.json(dbThoughtData);
		})
		.catch((err) => res.json(err));
}

// updating thought

updateThought({ params, body }, res);
{
	Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
		.then((dbThoughtData) => {
			if (!dbThoughtData) {
				res.status(404).json({ message: "No thought is found with this id!" });
				return;
			}
			res.json(dbThoughtData);
		})
		.catch((err) => res.status(400).json(err));
}
