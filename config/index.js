const fs = require('fs')
const path = require('path')

// Get path full path
const normalizedPath = path.join(__dirname, '.')

// Get files in path engind in ''.json'
const files = fs.readdirSync(normalizedPath).filter(file => path.extname(file) === '.json')

// Import the configs from the files
const configs = files.map(file => require(`./${file}`))

module.exports = configs
