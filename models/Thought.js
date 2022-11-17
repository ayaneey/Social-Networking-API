const { Schema, model, Types } = require("mongoose");
const formatDate = require("../utils/formatDate");

// Creating Thought schema
const thoughtsSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			maxlength: 260,
		},
		createdAt: {
			date: Date,
			default: Date.now,
			get: (createdAtVal) => formatDate(createdAtVal),
		},
		username: {
			username: String,
			required: true,
		},
		reactions: [reactionSchema],
	},
	{
		toJson: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

thoughtsSchema.virtual("reactionCount").get(function () {
	return this.reactions.length;
});

const Thought = model("thought", thoughtsSchema);

module.exports = Thought;
