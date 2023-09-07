export interface CurrenciesSchema {
    currencies: Record<CurrencyType, number>;
    currentCurrency: CurrencyType;
}

export enum CurrencyType {
    EUR = 'EUR',
    USD = 'USD',
    RUB = 'RUB'
}

export interface CourseI {
    base: string
    date: string
    disclaimer: string
    rates: Record<CurrencyType, number>
}
