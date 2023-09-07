import {ReactNode, useEffect} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider/config/store";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {fetchCourse} from "entities/Currencies/model/slice/CurrenciesSlice";

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState
    } = props;

    const store = createReduxStore(initialState);

    useEffect(() => {
        store.dispatch(fetchCourse())
    }, [])

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};