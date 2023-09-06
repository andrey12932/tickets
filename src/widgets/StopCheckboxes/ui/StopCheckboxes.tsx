import {classNames} from "shared/lib/classNames/classNames";
import cls from './StopCheckboxes.module.scss';
import {Checkbox} from "shared/ui/Checkbox/Checkbox";
import React from "react";
import {PossibleStopFilterValues} from "entities/Flights/model/types/flightsSchema";
import {useDispatch, useSelector} from "react-redux";
import {flightsActions} from "entities/Flights/model/slice/FlightsSlice";
import {getStopFilter} from "entities/Flights/model/selectors/getStopFilter/getStopFilter";

interface StopCheckboxesProps {
    className?: string
}

export const StopCheckboxes = (props: StopCheckboxesProps) => {
    const {
        className
    } = props;

    const dispath = useDispatch();
    const stopFilterArr = useSelector(getStopFilter);

    const PossibleValuesArr = Object.values(PossibleStopFilterValues);

    const selectHandler = (e: React.ChangeEvent<HTMLInputElement>, value: PossibleStopFilterValues) => {
        if (value !== PossibleStopFilterValues.ALL) {
            if (e.target.checked) {
                dispath(flightsActions.addStopFilterValue(value))
            } else {
                dispath(flightsActions.deleteStopFilter(value))
            }
        } else {
            if (e.target.checked) {
                dispath(flightsActions.setAllStopFilter())
            } else {
                dispath(flightsActions.showOnlyStopFilter(PossibleStopFilterValues.NULL))
            }
        }
    }

    const showOneFilter = (value: PossibleStopFilterValues) => {
        dispath(flightsActions.showOnlyStopFilter(value))
    }

    return (
        <div className={classNames(cls.StopCheckboxes, {}, [className])}>
            <h3>
                Количество пересадок
            </h3>
            {
                PossibleValuesArr.map(value => (
                    <div key={value} className={cls.checkboxContainer}>
                        <Checkbox checked={stopFilterArr.includes(value)} onChange={(e: any) => selectHandler(e, value)}>
                            {value}
                        </Checkbox>
                        {
                            value !== PossibleStopFilterValues.ALL ?
                                <span onClick={() => showOneFilter(value)} className={cls.only}>
                                    ТОЛЬКО
                                </span>
                                : ''
                        }
                    </div>
                ))
            }
        </div>
    );
};
