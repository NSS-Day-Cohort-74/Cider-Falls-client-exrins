// 5 modules main, database, area, service, guest 
// create services list HTML include service_id in state to get areas when clicked

import { Area } from "./area.js";

// create areas list HTML
//      create services list HTML for each
//      area_id in state to get guests when clicked
//      Event listeners, Loop through guests
//          areaService_Id is equal to

/* guests list
 function tasked with looping through the guest database
    adds guest list to html
    return our guestHtml string template
*/

/* Main
import functions from area, service, guest 
create string template for our html
    target the dom to have to string template displayed as html
*/


const mainContainer = document.querySelector("#container")

const applicationHTML = Area()

mainContainer.innerHTML = applicationHTML