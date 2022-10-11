export type ManType = {
    name: string
    age: number
}

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome!`);
}