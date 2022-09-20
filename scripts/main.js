import { getGuests } from './database.js'
import { getParkAreas } from './database.js'
import { getServices } from './database.js'
import { getAreaServices } from './database.js'
import { guestListInHTML } from './guests.js'
import { servicesListInHTML } from './services.js'
let parkAreas = getParkAreas()
let services = getServices()
let areaServices = getAreaServices()
let guestList = getGuests()
let htmlGuestList = guestListInHTML(guestList)
let htmlServicesList = servicesListInHTML(services)

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("parkarea")) {
            const [,parkAreaKey] = itemClicked.id.split("--")
            let correctArea = null
            let guestsInArea = []
            for (const area of parkAreas) {
                if (area.id === parseInt(parkAreaKey)) {
                    correctArea = area
                }
            }
            for (const guest of guestList) {
                if (guest.location === correctArea.id) {
                    guestsInArea.push(guest)
                }
            }
            window.alert(`There are currently ${guestsInArea.length} guests in the ${correctArea.name}.`)
        }
    }
)

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceKey] = itemClicked.id.split("--")
            let correctService = null
            let correctAreaServices = []
            let correctAreas = []
            let outputServiceMessage = ""
            
            for (const service of services) {
                if (service.id === parseInt(serviceKey)) {
                    correctService = service
                }
            }
            for (const areaService of areaServices) {
                if (areaService.servicesId === correctService.id) {
                    correctAreaServices.push(areaService)
                }
            }
            for (const parkArea of parkAreas) {
                for (const correctAreaService of correctAreaServices) {
                    if (correctAreaService.areaId === parkArea.id) {
                        correctAreas.push(parkArea)
                    }
                }
            }
            let i = 1
            for (const correctArea of correctAreas) {
                if (correctAreas.length > 1) {
                    outputServiceMessage += correctArea.name
                    if (correctAreas.length > i) {
                        outputServiceMessage += ", "
                    }
                    if (correctAreas.length === i) {
                        window.alert(`${correctService.name} is available in the following areas: ${outputServiceMessage}.`)
                    }
                    i++;
                } else {
                    outputServiceMessage += correctArea.name 
                    window.alert(`${correctService.name} is available in the following areas: ${outputServiceMessage}.`)
                }
            }
        }
    }
)

let asideList = document.querySelector("#guest-list-main")
asideList.innerHTML = htmlGuestList

let servicesList = document.querySelector("#services")
servicesList.innerHTML = htmlServicesList

