const express = require('express')
const mongoose = require('mongoose')

const articleRouter = require('./routes/articles')

const app = express()


mongoose.connect('mongodb+srv://shikha:Shikha123456@cluster0.1rxrw.mongodb.net/ShikhaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
        // useUnifiedTopology: true
})


app.set('view engine', 'ejs')
    // app.set('views', 'views');


app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
            title: 'Test articles',
            createdAt: new Date(),
            description: 'Test description'
        },
        {
            title: 'Test articles 2',
            createdAt: new Date(),
            description: 'Test description 2'
        }
    ]
    res.render('articles/index', { articles: articles })
})

app.listen(3000)