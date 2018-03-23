'use strict';

const express = require('express')
  , router = express.Router()

  , StartsController = require('./../controllers/stars')
  , startsCtrl = new StartsController();

router.get('/', startsCtrl.getStarred.bind(startsCtrl));
router.post('/add', startsCtrl.starTweet.bind(startsCtrl));
router.get('/remove/:id', startsCtrl.unstarTweet.bind(startsCtrl));

module.exports = router;