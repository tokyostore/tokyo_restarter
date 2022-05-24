
const root = GetResourcePath(GetCurrentResourceName())
const config = require(`${root}/config.json`)

const fs = require('fs');

config.resources.forEach(resource => {
    const folderPath = GetResourcePath(`${resource.name}`)
    resource.files.forEach(file => {
        fs.watchFile(`${folderPath}/${file}`, function(){
            StopResource(resource.name)
            StartResource(resource.name)
        })
    })
})
