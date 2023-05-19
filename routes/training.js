const {
  createTraining,
  getAllTrainings,
  insertSampleTrainingData
} = require("../controllers/trainingController");
 
const router = require("express").Router();

router.get("/alltrainings", getAllTrainings);
router.post("/createtraining", createTraining);


router.get("/insert", insertSampleTrainingData); 

module.exports = router;
 