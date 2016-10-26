var express = require('express');
var router = express.Router();
// include our PartyModel
var PartyModel = require ('../models/Party'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/home', renderSQL);
router.get('/form', renderForm); // challenge 
router.post('/create', insertIntoParties); // challenge
// id should be last
router.get('/:id', renderPartyById);

// challenge --> create a 'get' route
// it renders a form.hbs
// this form.hbs contains a <form>
// with an <input> for each attributes on the model (4)


// challenge functions

function insertIntoParties(req, res, next) {
	console.log(req.body);
	var model = new PartyModel(req.body).save().then(function(data) {
		res.render('success', data.attributes);
	});
	// res.json(req.body); // commented from before
}

function renderForm (req, res, next) {
	res.render('form', {})
}


function renderPartyById(req, res, next) {
	// call my individual model
	// first, i need the ID from req.params
	var id = parseInt(req.params.id); // <-- need to parse <-- var id = req.params.id; 
	console.log(id) // debugging
	if (typeof id != 'number') {
		res.json({message: 'invalid ID specified'});
	}

	PartyModel.where({   // partymodel for our table 
		id: id   // with an id of id
	}).fetch().then(function(model) {    // then fetch that model and render a party view with a model --> create party view in views
		console.log(model); // debugging
		res.render('party', model.attributes); // need to add .attributes
	});

};


function renderSQL(req, res, next) {
	// call collection of rows (table)
	PartyModel.collection().fetch().then(function(models) {
		// res.render('all', models);
		res.json(models);
	});
};






module.exports = router;
