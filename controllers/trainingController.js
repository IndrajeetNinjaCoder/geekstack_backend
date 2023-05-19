const Training = require("../models/TrainingModel");
const training = require("../sampledatabase/trainingdb.jsx")


module.exports.getAllTrainings = async (req, res, next) => {
  try {
    const trainings = await Training.find();
    return res.json(trainings);
  } catch (ex) {
    next(ex);
  }
};
module.exports.createTraining = async (req, res, next) => {
  try {
    const { trainingName, category, subcategory, message, price } = req.body;
    const imageurl = req.file.path;
    const image = `${process.env.REACT_APP_HOST_URL}/${imageurl}`;
    const training = await Training.create({
      trainingName,
      category,
      subcategory,
      message,
      price,
      image
    });
    return res.json({ msg: "Training created", status: true, training });
  } catch (ex) {
    next(ex);
  }
};








//inserting sample trainings  
module.exports.insertSampleTrainingData = async (req, res, next) => {
  try {
    await Training.insertMany(training);
    res.status(200).json({ message: "Training data inserted successfully" });
  } catch (ex) {
    next(ex);
  }
};

