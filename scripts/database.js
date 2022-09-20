const database = {
    guests: [
        {
        id: 1,
        name: "Tony Hawk",
        location: 6
        },
        {
        id: 2,
        name: "Spider-man",
        location: 3
        },
        {
        id: 3,
        name: "Jigglypuff",
        location: 2
        },
        {
        id: 4,
        name: "Gengu",
        location: 1
        },
        {
        id: 5,
        name: "Crazy Frog",
        location: 5
        },
        {
        id: 6,
        name: "Papa Smurf",
        location: 3
        },
        {
        id: 7,
        name: "Hercules",
        location: 4
        },
        {
        id: 8,
        name: "Britney Spears",
        location: 4
        },
        {
        id: 9,
        name: "Green Ranger",
        location: 6
        },
        {
        id: 10,
        name: "Magneto",
        location: 2
        }
    ],
    parkAreas: [
        {
        id: 1,
        name: "Lodge Area"
        },
        {
        id: 2,
        name: "Lost Wolf Hiking Trail Area"
        },
        {
        id: 3,
        name: "Chamfort River Area"
        },
        {
        id: 4,
        name: "Gander River Area"
        },
        {
        id: 5,
        name: "Campground Area"
        },
        {
        id: 6,
        name: "Pine Bluffs Trail Area"
        }
    ],
    services: [
        {
        id: 1,
        name: "hiking"
        },
        {
        id: 2,
        name: "rock climbing"
        },
        {
        id: 3,
        name: "fishing"
        },
        {
        id: 4,
        name: "lodging"
        },
        {
        id: 5,
        name: "picnicking"
        },
        {
        id: 6,
        name: "parking"
        },
        {
        id: 7,
        name: "information"
        },
        {
        id: 8,
        name: "rafting"
        },
        {
        id: 9,
        name: "ziplining"
        },
        {
        id: 10,
        name: "canoeing"
        }
    ],
    areaServices: [
        {
        id: 1,
        areaId: 1,
        servicesId: 6
        },
        {
        id: 2,
        areaId: 6,
        servicesId: 5
        },
        {
        id: 3,
        areaId: 4,
        servicesId: 3
        },
        {
        id: 4,
        areaId: 2,
        servicesId: 1
        },
        {
        id: 5,
        areaId: 2,
        servicesId: 5
        },
        {
        id: 6,
        areaId: 2,
        servicesId: 2
        },
        {
        id: 7,
        areaId: 1,
        servicesId: 4
        },
        {
        id: 8,
        areaId: 1,
        servicesId: 7
        },
        {
        id: 9,
        areaId: 1,
        servicesId: 5
        },
        {
        id: 10,
        areaId: 6,
        servicesId: 9
        },
        {
        id: 11,
        areaId: 6,
        servicesId: 1
        },
        {
        id: 12,
        areaId: 5,
        servicesId: 4
        },
        {
        id: 13,
        areaId: 5,
        servicesId: 6
        },
        {
        id: 14,
        areaId: 5,
        servicesId: 7
        },
        {
        id: 15,
        areaId: 4,
        servicesId: 1
        },
        {
        id: 16,
        areaId: 3,
        servicesId: 8
        },
        {
        id: 17,
        areaId: 3,
        servicesId: 3
        },
        {
        id: 18,
        areaId: 3,
        servicesId: 10
        }
    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({...areaService}))
}