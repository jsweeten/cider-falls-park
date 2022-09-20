import { getServices } from './database.js'

const services = getServices()

export const servicesListInHTML = (services) => {
    let htmlString = "<ul>"
    for (const service of services) {
        htmlString += `<li id="service--${service.id}">${service.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}