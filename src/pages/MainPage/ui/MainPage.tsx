import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import {FlightCard} from "widgets/FlightCard/ui/FlightCard";
import {Flights, flightsSlice} from "entities/Flights";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourse, flightsActions} from "entities/Flights/model/slice/FlightsSlice";
//import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <div className="">
            <Flights />
        </div>
    )
}

export default MainPage
