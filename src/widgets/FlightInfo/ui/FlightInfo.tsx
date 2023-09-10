import {classNames} from "shared/lib/classNames/classNames";
import cls from './FlightInfo.module.scss';
import {Ticket} from "entities/Flights/model/types/flightsSchema";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat'

interface FlightInfoProps {
    className?: string;
    ticket?: Ticket;
    destination: boolean;
}

export const FlightInfo = (props: FlightInfoProps) => {
    const {
        className,
        ticket,
        destination
    } = props;

    const [time, date, airport, city] = destination ?
        [ticket.arrival_time, ticket.arrival_date, ticket.destination, ticket.destination_name]
        : [ticket.departure_time, ticket.departure_date, ticket.origin, ticket.origin_name]

    const getDateWithWords = (date: string) => {
        dayjs.extend(customParseFormat)
        return dayjs(date, 'DD.MM.YY', 'ru').locale('ru').format('D MMM YYYY, dd')
    }
    const dateWithWords = getDateWithWords(date)

    return (
        <div className={classNames(cls.item, {
            [cls['destination']]: destination
        }, [className])}>
            <span className={cls.time}>
                {time}
            </span>
            <span className={cls.city}>
                {airport}, {city}
            </span>
            <span>
                {dateWithWords}
            </span>
        </div>
    );
};