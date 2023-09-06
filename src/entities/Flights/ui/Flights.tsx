import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {flightsActions, flightsReducer, flightsSlice} from "../model/slice/FlightsSlice";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {getFlightsTickets} from "entities/Flights/model/selectors/getFlightsTickets/getFlightsTickets";
import {useEffect} from "react";
import {FlightCard} from "widgets/FlightCard/ui/FlightCard";
import cls from './Flights.module.scss'
import {Filter} from "widgets/Filter/ui/Filter";

export const Flights = () => {
    const dispatch = useDispatch();
    const flightsTickets = useSelector(getFlightsTickets)

    useEffect(() => {
        dispatch(flightsActions.getAllTickets())
    }, [])

    return (
        <div className={cls.main}>
            <Filter />
            <div className={cls.tickets}>
                {
                    flightsTickets.map(ticket =>  (
                            <FlightCard key={Math.random()} flight={ticket} />
                        )
                    )
                }
            </div>
        </div>
    );
};