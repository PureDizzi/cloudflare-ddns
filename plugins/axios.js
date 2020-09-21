const axios = require('axios')

function createAxios(email, globalAPIKey) {
    return axios.create({
        baseURL: 'https://api.cloudflare.com',

        timeout: 3000,

        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Email': email,
            'X-Auth-Key': globalAPIKey
        }
    })
}

module.exports = createAxios
