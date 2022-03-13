const router = require('express').Router()
const axios = require("axios")
const cheerio = require('cheerio')


newsSources = [
  {
    name: 'cryptotelegraph',
    address: 'https://cointelegraph.com/'
  },
  {
    name: 'cnbc',
    address: 'https://www.cnbc.com/cryptocurrency/'
  }
]

const articles = []


newsSources.forEach(newsSource => {
  axios.get(newsSource.address)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)

    $('a:contains("crypto")', html).each(function () {
      const title = $(this).text()
      const url = $(this).attr("href")

      articles.push({
        title,
        url,
        source: newsSource.name
      })
  })
})
})

router.get('/news', (req, res) => {
  res.json(articles)
})

router.get('/news/:newsSourceId', (req, res) => {
  const newsSourceId = req.params.newsSourceId

  const newsSourceAddress = newsSources.filter(newsSource => newsSource.name == newsSourceId)[0].address
  const newsSourceBase = newsSources.filter(newsSource => newsSource.name == newsSourceId)[0].base


  axios.get(newsSourceAddress)
      .then(response => {
          const html = response.data
          const $ = cheerio.load(html)
          const specificArticles = []

          $('a:contains("crypto")', html).each(function () {
              const title = $(this).text()
              const url = $(this).attr('href')
              specificArticles.push({
                  title,
                  url,
                  source: newsSourceId
              })
          })
          res.json(specificArticles)
      }).catch(err => console.log(err))
})

module.exports = router