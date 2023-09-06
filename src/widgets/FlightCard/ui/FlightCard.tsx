import {classNames} from "shared/lib/classNames/classNames";
import cls from './FlightCard.module.scss';
import {CompanyLogo, companyNames} from "shared/ui/CompanyLogo/CompanyLogo";
import {Button} from "shared/ui/Button/Button";
import {CurrencyType, Ticket} from "entities/Flights/model/types/flightsSchema";
import Plane from 'shared/assets/plane.svg';
import {FlightInfo} from "widgets/FlightInfo/ui/FlightInfo";
import {useEffect, useState} from "react";
import {pluralize} from "shared/lib/pluralize/pluralize";
import dayjs from "dayjs";
import 'dayjs/locale/ru'
import {useSelector} from "react-redux";
import {getCurrencies, getCurrentCurrency} from "entities/Flights/model/selectors/getCurrencies/getCurrencies";

interface FlightCardProps {
    className?: string;
    flight?: Ticket
}

const CurrencyIcon: Record<CurrencyType, string> = {
    [CurrencyType.RUB]: '₽',
    [CurrencyType.EUR]: '€',
    [CurrencyType.USD]: '$'
}

export const FlightCard = (props: FlightCardProps) => {
    const {
        className,
        flight
    } = props;

    const rates = useSelector(getCurrencies);
    const currentCurr = useSelector(getCurrentCurrency);

    const price = flight.price * rates[currentCurr]

    useEffect(() => {
        console.log(rates[currentCurr])
    }, [])

    const [animate, setAnimate] = useState(false);

    return (
        <div onMouseEnter={() => setAnimate(true)} className={classNames(cls.FlightCard, {}, [className])}>
            <div className={cls.left}>
                <CompanyLogo companyName={companyNames[flight.carrier]} />
                <Button>
                    Купить <br/> за {Math.round(price)} {CurrencyIcon[currentCurr]}
                </Button>
            </div>
            <div className={cls.right}>
                <div className={cls.departure}>
                    <FlightInfo ticket={flight} destination={false}/>
                </div>
                <div className={cls.stops}>
                    <span>
                        {flight.stops === 0 ?
                            'БЕЗ ПЕРЕСАДОК':
                            <>
                                {flight.stops} {pluralize(flight.stops, ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'])}
                            </>
                        }
                    </span>
                    <div className={cls.plane}>
                        <div className={cls.line}></div>
                        <div className={classNames(cls.plane__icon, {[cls.animate]: animate}, [])}>
                            <Plane />
                        </div>
                    </div>
                </div>
                <div className={cls.destination}>
                    <FlightInfo ticket={flight} destination={true}/>
                </div>
            </div>
        </div>
    );
};