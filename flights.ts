import {Flight} from "./flight.models.ts";
import {faker} from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

function generateFlights(count: number): Flight[] {
    function generateFlight(): Flight {
        return {
            id: faker.random.uuid(),
            orig: faker.address.countryCode(),
            dest: faker.address.countryCode(),
            depTime: faker.date.future(),
            arrTime: faker.date.future()
        }
    }

    return [...new Array(count)].map(() => generateFlight())
}

export function getFlights(orig: string = "", dest: string = ""): Promise<Flight[]> {
    const flights: Flight[] = generateFlights(10)
    return Promise.resolve(flights)
}

export const getEnvironment = (): string => "prod"

const flights = await getFlights("", "")
console.log(JSON.stringify(flights, null, 2))