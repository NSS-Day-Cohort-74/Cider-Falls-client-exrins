import { getArea, getGuest, getService, getAreaService } from "./database.js";
const areas = getArea()
const areaServices = getAreaService()
const services = getService()
const guests = getGuest()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter out odd numbers to get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

document.addEventListener(
    "click",
    (getClick) => {
        debugger
        const clickTarget = getClick.target
        const areaId = parseInt(clickTarget.dataset.areaid)
        const type =clickTarget.dataset.type
        let memberCount = 0
        for (const areaService of areaServices) {
            if (areaService.areaId === areaId) {
                for (const guest of guests) {
                    if (guest.areaServiceId === areaService.id) {
                        memberCount++
                    }
                }
            }
        }
        if(memberCount > 0){
            window.alert(memberCount)
        } else if(type === "area"){
            window.alert("There are currently no members in this area")
        }
        
    }
)

const areaServiceFunc = (area) => {
    //const areaServiceses = areaServices.filter(areaServicesOBJ => areaServicesOBJ.areaId = area.id)
    let serviceObj = {}
    let htmlService = "<ul>"
    for (const areaService of areaServices) {
        if (areaService.areaId === area.id) {
            for (const service of services) {
                if (service.id === areaService.serviceId) {
                    //html for service line item
                    htmlService += `<li>${service.title}</li>`
                }
            }
        }
    }
    htmlService += `</ul>`
    return htmlService
}

export const Area = () => {
    let areaHtml =  ""
    for (const area of areas) {
        //add html for area header
        let areaServiceReturn = areaServiceFunc(area)
        areaHtml += `<div class= "service-area"><h3 data-areaid ="${area.id}" data-type="area">${area.title}</h3>${areaServiceReturn}</div>`
    }
    areaHtml += ""
    return areaHtml
}