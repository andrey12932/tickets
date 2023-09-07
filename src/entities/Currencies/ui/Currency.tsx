import {classNames} from "shared/lib/classNames/classNames";
import cls from './Currency.module.scss';
import {CurrencyType} from "entities/Currencies/model/types/currenciesSchema";
import {useDispatch, useSelector} from "react-redux";
import { getCurrentCurrency } from "entities/Currencies/model/selectors/getCurrencies/getCurrencies";
import { currenciesActions } from "entities/Currencies/model/slice/CurrenciesSlice";

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
        dispatch(currenciesActions.changeCurrency(select))
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