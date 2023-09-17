const router = require('express').Router()
const {addToLikedMovies, getLikedMovies}=require('../controlers/UserControler')
 router.post('/add', addToLikedMovies)
 router.get('/liked/:email', getLikedMovies)

 module.exports = router;