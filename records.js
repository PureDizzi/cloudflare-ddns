const createAxios = require('./plugins/axios')
const inquirer = require('inquirer')

// Cloudflare records to apply
const configs = require('./config')

async function getRecords(config) {
    try {
        if (!config.email || !config.globalAPIKey)
            return false

        const axios = createAxios(config.email, config.globalAPIKey)

        const zones = await axios.get(`/client/v4/zones`)

        const zoneNames = zones.data.result.map(res => ({ name: res.name, value: res.id }))

        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'zone',
                    message: 'Which zone do you want to inspect?',
                    choices: [
                        ...zoneNames
                    ]
                }
            ])
            .then(async answers => {
                console.log(answers)
                const records = await axios.get(`/client/v4/zones/${answers.zone}/dns_records`)
                console.log(records.data.result)
            })
            .catch(error => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else when wrong
                }
            })

        console.log()
    } catch (error) {
        console.log(error)
    }
}

configs.forEach(config => getRecords(config))
