import { getArea, getService, getAreaService } from "./database.js";
const services = getService()
const areas = getArea()
const areaservices = getAreaService()
document.addEventListener(
    "click",
    (getClick) => {
        let clickTarget = getClick.target
        const serviceId = clickTarget.dataset.serviceid
        const serviceName = clickTarget.dataset.name
        const type = clickTarget.dataset.type
        let alertMsg = `${serviceName} is available in `
        let msgCount = 0
        for(const areaService of areaservices){
            for(const area of areas){
                if(area.id === areaService.areaId){
                    if(areaService.serviceId === parseInt(serviceId)){
                        if (msgCount > 0) {
                            alertMsg += `, `
                        }
                        alertMsg += area.title
                        msgCount++  
                    }
                }
            }
        }
        if(type === "service")
        window.alert(alertMsg)
        
    }
)

export const Services = () =>{
    let serviceHtml = "Park Services: "
    for(const service of services){
        serviceHtml += `<span data-type="service" data-name="${service.title}" data-serviceid="${service.id}">${service.title}</span>, `
    }
    let newServiceHtml = serviceHtml.slice(0, -2); 
    return newServiceHtml
}