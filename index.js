const express = require('express')
const app = express()
const axios = require('axios')

// Not very safely stored key...



app.get('/candidates/images/', async (req, res) => {
  console.log("Hello world")
  const name = req.query.name
  console.log(name)
  const response = await axios.default.get('https://api.qwant.com/api/search/images', {
    params: {
      count: 1,
      q: name,
      t: 'images',
      safesearch: 1,
      locale: 'en_US',
      uiv: 4
    }
  })

  const mediaURL = response.data.data.result.items[0].media

  res.send(mediaURL)
})
app.listen(3000, () => console.log('Server running on port 3000'))

