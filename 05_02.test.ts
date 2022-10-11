import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";

let city: CityType;
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                stuffCount: 200,
                address: {
                    street: {
                        title: "Central street"
                    }
                }

            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                stuffCount: 1000,
                address: {
                    street: {
                        title: "South street"
                    }
                }

            }
        ],
        citizenNumber: 1000000
    }
})

test("list of streets titles of government buildings", () => {
    let streetNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetNames.length).toBe(2);
    expect(streetNames[0]).toBe("Central street");
    expect(streetNames[1]).toBe("South street");
})

test("list of streets titles", () => {
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

test("create greeting messages for streets", () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Happy street");
})
