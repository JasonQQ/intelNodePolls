var mongoose = require('mongoose');
var voteSchema = new mongoose.Schema({ ip: 'String' });
var choiceSchema = new mongoose.Schema({
    text: String,
    votes: [voteSchema]
});
exports.PollSchema = new mongoose.Schema({
    question: { type: String, required: true },
    choices: [choiceSchema]
});/**
 * Created by xiuwwu on 7/6/15.
 */
