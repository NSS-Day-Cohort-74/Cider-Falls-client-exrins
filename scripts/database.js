const database = {
    areas: [
        { id: 1, title: "Chamfort River" },
        { id: 2, title: "Lost Wolf Hiking Trail" },
        { id: 3, title: "Lodge" },
        { id: 4, title: "Gander River" },
        { id: 5, title: "Campgrounds" },
        { id: 6, title: "Pine Bluffs Trails" },
    ],
    areaService: [
        { id: 1, areaId: 1, serviceId: 1 },
        { id: 2, areaId: 1, serviceId: 2 },
        { id: 3, areaId: 1, serviceId: 3 },
        { id: 4, areaId: 2, serviceId: 4 },
        { id: 5, areaId: 2, serviceId: 5 },
        { id: 6, areaId: 2, serviceId: 6 },
        { id: 7, areaId: 3, serviceId: 7 },
        { id: 8, areaId: 3, serviceId: 8 },
        { id: 9, areaId: 3, serviceId: 9 },
        { id: 10, areaId: 3, serviceId: 5 },
        { id: 11, areaId: 4, serviceId: 3 },
        { id: 12, areaId: 4, serviceId: 4 },
        { id: 13, areaId: 5, serviceId: 9 },
        { id: 14, areaId: 5, serviceId: 7 },
        { id: 15, areaId: 5, serviceId: 8 },
        { id: 16, areaId: 6, serviceId: 4 },
        { id: 17, areaId: 6, serviceId: 5 },
        { id: 18, areaId: 6, serviceId: 10 }
    ],
    services: [
        { id: 1, title: "rafting"},
        { id: 2, title: "canoeing"},
        { id: 3, title: "fishing" },
        { id: 4, title: "hiking"},
        { id: 5, title: "picnicking"},
        { id: 6, title: "rock climbing"},
        { id: 7, title: "lodging"},
        { id: 8, title: "parking"},
        { id: 9, title: "information"},
        { id: 10, title: "zip lines"}
    ],
    guests: [
        { id: 1, first: "John", last: "Doe", areaServiceId: 1 },
        { id: 2, first: "kyle", last: "smith", areaServiceId: 2 },
        { id: 3, first: "donald", last: "duck", areaServiceId: 3 },
        { id: 4, first: "Homer", last: "Simpson", areaServiceId: 4 },
        { id: 5, first: "Marge", last: "Simpson", areaServiceId: 5 },
        { id: 6, first: "Maggie", last: "Simpson", areaServiceId: 7 },
        { id: 7, first: "Lisa", last: "Simpson", areaServiceId: 8 },
        { id: 8, first: "Bart", last: "Simpson", areaServiceId: 9 },
        { id: 9, first: "Jane", last: "Doe", areaServiceId: 10 },
        { id: 10, first: "Jan", last: "Brady", areaServiceId: 12 },
        { id: 11, first: "Greg", last: "Brady", areaServiceId: 13 },
        { id: 12, first: "Cindy", last: "Brady", areaServiceId: 14 },
        { id: 13, first: "Marsha", last: "Brady", areaServiceId: 15 },
        { id: 14, first: "Peter", last: "Brady", areaServiceId: 17 },
        { id: 15, first: "Florence", last: "Henderson", areaServiceId: 18 },
        { id: 16, first: "Doe", last: "Rayme", areaServiceId: 10 }
    ],
}

export const getArea = () => {
    return database.areas.map(area => ({...area}))
}
export const getAreaService = () => {
    return database.areaService.map(areaService => ({...areaService}))
}
export const getService = () => {
    return database.services.map(service => ({...service}))
}
export const getGuest = () => {
    return database.guests.map(guest => ({...guest}))
}