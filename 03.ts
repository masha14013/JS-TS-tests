import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill:string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title:skill
    })
}

export function makeStudentActive (s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingsType, staffCountToFire: number) {
    building.stuffCount -= staffCountToFire;
}

export const toHireStaff = (buildings: GovernmentBuildingsType, staffCountToHire: number) => {
    buildings.stuffCount += staffCountToHire;
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizenNumber}`;
}