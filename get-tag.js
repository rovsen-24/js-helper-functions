const cheerio = require('cheerio');
const axios = require('axios');

(async(url, selector) => {
  let response = await axios.get(url)
  const $ = cheerio.load(response.data)
  const text = $(selector).text();
  console.log(text);
})(process.argv[2], process.argv[3])
