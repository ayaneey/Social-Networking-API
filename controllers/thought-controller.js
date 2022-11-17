const { Thought, User } = require("../models");

const thoughtController = {
	// gathering all user thoughts
	getAllThoughts(req, res) {
		Thought.find()
			.then((thought) => res.json(thought))
			.catch((err) => res.status(500).json(err));
	},
};
