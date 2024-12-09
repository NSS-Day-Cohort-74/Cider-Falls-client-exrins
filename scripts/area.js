import { getArea, getGuest, getService, getAreaService} from "./database.js";
const areas = getArea()
const areaServices = getAreaService()
const services = getService()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter out odd numbers to get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);


const areaServiceFunc = (area) => {
    //const areaServiceses = areaServices.filter(areaServicesOBJ => areaServicesOBJ.areaId = area.id)
    let serviceObj = {}
    let htmlService = ""
    for(const areaService of areaServices){
        if(areaService.areaId === area.id){
            for(const service of services){
                if(service.id === areaService.serviceId)
                {
                    //html for service line item
                    htmlService += `<li>${service.title}</li>`
                }
            }
        }
    }

    return htmlService
}

export const Area = () => {
    let areaHtml = ""
    for (const area of areas) {
        //add html for area header
        let areaServiceReturn = areaServiceFunc(area)
        areaHtml += `<h1>${area.title}</h1>${areaServiceReturn}`
    }
    return areaHtml
}