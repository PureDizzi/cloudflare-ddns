const publicIp = require('public-ip')
const createAxios = require('./plugins/axios')

// Cloudflare records to apply
const configs = require('./config')

function updateDDNS(record, ip, axios) {
    return axios.put(`/client/v4/zones/${record.zoneId}/dns_records/${record.id}`, {
        type: record.type,
        name: record.name,
        content: ip,
        ttl: record.ttl,
        proxied: record.proxied
    })
}

async function DynamicDNS(config) {
    try {
        if (!config.email || !config.globalAPIKey)
            return false

        const ip = await publicIp.v4()

        const axios = createAxios(config.email, config.globalAPIKey)

        const records = config.records.filter(record => [record.zoneId, record.name, record.id, record.ttl].every(element => element))

        const promises = records.map(record => updateDDNS(record, ip, axios))

        Promise.all(promises)
            .then(results => {
                results.forEach(result => console.log(result.data.success))
            })
            .catch(errors => {
                console.error(errors)
            })
    } catch (error) {
        console.log(error)
    }
}

configs.forEach(config => DynamicDNS(config))
