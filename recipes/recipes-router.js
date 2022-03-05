require('dotenv').config();

const express = require('express');
const router = express();

router.use(express.json());

const knex = require('knex');
const knexConfig = require('../knexfile');

// connect database to knex
const database = knex(knexConfig.development);

// GET recipe table 
router.get('/', (req, res) => {
  database('recipes').then(recipe => {
    res.status(200).json(recipe);
  }).catch(error => {
    console.log(error);
    res.status(500).json(error.message);
  })
});

//POST to recipe table
router.post('/', (req, res) => {
  database('recipes').insert(req.body)
    .then(recipe => {
      res.status(200).json(recipe)
    }).catch(error => {
      res.status(500).json(error.message)
    })
});

// GET recipe table with ID
router.get('/:id', (req, res) => {
  database('recipes')
    .where({ id: req.params.id })
    .first()
    .then(specificRecipeID => {
      if (specificRecipeID) {
        res.status(200).json(specificRecipeID);
      } else {
        res.status(404).json({ message: 'recipe ID not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error.message);
    })
});

//PUT route
router.put('/:id', (req, res) => {
  database('recipes')
    .where({ id: req.params.id })
    .update({ title: req.body.title, source: req.body.source, ingredients: req.body.ingredients, instructions: req.body.instructions, category: req.body.category, user_id: req.body.user_id })
    .then(updatedInfo => {
      if (updatedInfo) {
        res.status(200).json(updatedInfo);
      } else {
        res.status(404).json({ message: "not found" });
      }
    })
});

// DELETE request to with ID
router.delete('/:id', (req, res) => {
  database('recipes')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: `${count} ${count > 1 ? 'records DELETED' : 'record DELETED'}`
        })

      } else {
        res.status(404).json({ message: 'RECIPE does not exist' })
      }

    }).catch(error => {
      res.status(500).json(error.message)
    })
});

router.get('/now', (req, res) => {
  const now = new Date().toISOString();
  res.send(now);
});

module.exports = router;
