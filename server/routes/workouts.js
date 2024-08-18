const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Workout = require('../models/Workout');

// @route   POST api/workouts
// @desc    Save a workout
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('exercise', 'Exercise is required').not().isEmpty(),
      check('sets', 'Sets is required').isInt({ min: 1 }),
      check('reps', 'Reps is required').isInt({ min: 1 }),
      check('weight', 'Weight is required').isInt({ min: 1 })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { exercise, sets, reps, weight } = req.body;

    try {
      const newWorkout = new Workout({
        user: req.user.id,
        exercise,
        sets,
        reps,
        weight
      });

      const workout = await newWorkout.save();

      res.json(workout);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;