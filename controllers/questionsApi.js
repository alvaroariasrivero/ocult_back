const Question = require('../models/question');

const getAllQuestions = async(req, res) => {
    let data;
    try {
        data = await Question.find({}, '-_id');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"error":error});
    }
};

module.exports = getAllQuestions;