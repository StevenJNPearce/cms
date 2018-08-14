const SitemapGenerator = require('sitemap-generator')

const url = process.argv[2]
const filePath = process.argv[3]

if (!url || !filePath) {
  console.error('Please pass the url to scrap and file path to write the sitemap XML')
  process.exit(1)
}

const generator = SitemapGenerator(url, {
  stripQuerystring: true,
  lastMod: true,
  filepath: filePath,
})

generator.on('done', () => {
  console.log('Sitemap generated!')
})

generator.start()
