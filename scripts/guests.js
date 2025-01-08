import {getGuest} from "./database.js"

const guests = getGuest()

export const guestList = () => {
    let guestHtml = `<h1>Guests</h1><ul>`  //add html for guest header
    for (const guest of guests) {
        guestHtml += `<li>${guest.first} ${guest.last}</li>`
    }
    guestHtml += `</ul>` 
    return guestHtml
}