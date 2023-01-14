const express = require('express');
const router = express.Router();
const Present = require('../models/modelPresent');


/* GET presents Page. */
router.get("/presents", async (req, res, next) => {
  try {
    const listOfAllPresents = await Present.find({});
    console.log(listOfAllPresents);
    res.render("allPresents", {listOfAllPresents});
  } catch (err) {
    next(err);
  }
});

/* GET search results */
/* ROUTE /presents/search */
router.get('/presents/search', async function (req, res, next) {
  const { name } = req.query;
  try {
    const searchPresent = await Present.findOne({ name: name });
      res.render("search", { query: name, searchPresent });
    } catch (error) {
      next (error)
    }
    });


/* GET new present form
Route /presents/new*/
router.get('/presents/new', function (req, res, next) {
  res.render('newPresent');
});

/*POST /presents/new */
router.post('/presents/new', async function (req, res, next) {
  const {name, image, price, recipient, description} = req.body;
  try {
    const createdPresent = await Present.create({ name, image, price, recipient, description });
    console.log(createdPresent);
    res.redirect(`/presents/${createdPresent._id}`);
  } catch (err) {
    next(err);
  }
});


/* GET delete present */
/* ROUTE /delete/:id */
router.get('/delete/:id', async function (req, res, next) {
  const { id } = req.params;
  try {
    await Present.findByIdAndDelete(id);
    res.redirect('/presents');
  } catch (err) {
    next(err);
  }
});

/*Get  details of the present.*/
router.get('/presents/:id', async function(req, res, next) {
  const { id } = req.params;
  try {
    const presentSelected = await Present.findById(id);
    res.render('present-details',  presentSelected );
  } catch (err) {
    next(err);
  }
});

module.exports = router;