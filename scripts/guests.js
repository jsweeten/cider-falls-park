import { getGuests } from "./database.js"

let guestList = getGuests()

export const guestListInHTML = (guestList) => {
    let htmlString = "<ul>"
    for (const guest of guestList) {
        htmlString += `<li id="guest--${guest.id}">${guest.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}