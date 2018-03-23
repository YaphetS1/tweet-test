const express = require('express')
  , router = express.Router()

  , TwitterController = require('./../controllers/twitter')
  , twitterCtrl = new TwitterController();

router.get('/', twitterCtrl.getTweets.bind(twitterCtrl));

module.exports = router;