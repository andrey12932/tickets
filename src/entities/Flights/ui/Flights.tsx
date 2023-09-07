import {useDispatch, useSelector} from "react-redux";
import {flightsActions, flightsReducer, flightsSlice} from "../model/slice/FlightsSlice";
import {getFlightsTickets} from "entities/Flights/model/selectors/getFlightsTickets/getFlightsTickets";
import React, {useCallback, useEffect, useState} from "react";
import {FlightCard} from "widgets/FlightCard/ui/FlightCard";
import cls from './Flights.module.scss'
import {Filter} from "widgets/Filter/ui/Filter";
import {Modal} from "shared/ui/Modal/Modal";

export const Flights =() => {
    const dispatch = useDispatch();
    const flightsTickets = useSelector(getFlightsTickets)

    const [modalOpened, setModalOpened] = useState<boolean>(false)

    useEffect(() => {
        dispatch(flightsActions.getAllTickets())
    }, [])

    const hideModal = useCallback(() => setModalOpened(false), [])
    const openModal = useCallback(() => setModalOpened(true), []);

    return (
        <div className={cls.tickets}>
            {
                flightsTickets.map(ticket =>  (
                    <FlightCard openModal={openModal} key={Math.random()} flight={ticket} />
                ))
            }
            <Modal
                isOpen={modalOpened}
                onClose={hideModal}
            >
                Буду рад сотрудничеству)
            </Modal>
        </div>
    );
};
