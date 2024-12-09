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
        { id: 1, first: "John", last: "Doe", areaServiceId: 1 }
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