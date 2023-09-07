import {companyNames} from "shared/ui/CompanyLogo/CompanyLogo";

export interface FlightsSchema {
    tickets: Ticket[];
    stopFilter: Array<PossibleStopFilterValues>
}

export interface Ticket {
    origin: string,
    origin_name: string,
    destination: string,
    destination_name: string,
    departure_date: string,
    departure_time: string,
    arrival_date: string,
    arrival_time: string,
    carrier: companyNames,
    stops: number,
    price: number
}

export enum PossibleStopFilterValues {
    ALL = 'Все',
    NULL = 'Без пересадок',
    ONE = '1 пересадка',
    TWO = '2 пересадки',
    THREE = '3 пересадки'
}

