import {classNames} from "shared/lib/classNames/classNames";
import cls from './Currency.module.scss';
import {CurrencyType} from "entities/Flights/model/types/flightsSchema";
import {useDispatch, useSelector} from "react-redux";
import {getCurrencies, getCurrentCurrency} from "entities/Flights/model/selectors/getCurrencies/getCurrencies";
import {flightsActions} from "entities/Flights/model/slice/FlightsSlice";

interface CurrencyProps {
    className?: string
}

export const Currency = (props: CurrencyProps) => {
    const {
        className
    } = props;

    const dispatch = useDispatch();
    const current = useSelector(getCurrentCurrency);

    const currencyList = Object.keys(CurrencyType).reverse() as CurrencyType[]

    const changeCurrency = (select: CurrencyType) => {
        dispatch(flightsActions.changeCurrency(select))
    }

    return (
        <div className={classNames(cls.Currency, {}, [className])}>
            <h3>
                Валюта
            </h3>
            <div className={cls.buttons}>
                {
                    currencyList.map(currency => (
                        <button
                            className={classNames(cls.buttons__item, {
                                [cls.selected]: currency === current
                            })}
                            onClick={() => changeCurrency(currency)}
                            key={currency}
                        >
                            { currency }
                        </button>
                    ))
                }
            </div>
        </div>
    );
};