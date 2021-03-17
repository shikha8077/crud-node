 const express = require('express')
 const articles = require('./../models/articles')
 const router = express.Router()


router.get('/new', (req, res) => {
     res.render('articles/new')
 })
router.get('/:id', (req, res) => {

 })

router.post('/new', async(req, res) => {
     const articles = new article({
         title: req.body.title,
         description: req.body.description,
         markdown: req.body.markdown
     })
     console.log(articles)
     try {
         articles = await articles.save()
         res.redirect('/articles/${articles.id}')
     } catch (e) {
         res.render('articles/new', { articles: articles });

     }
 })

 module.exports = router
 