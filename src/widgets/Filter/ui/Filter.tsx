import {classNames} from "shared/lib/classNames/classNames";
import cls from './Filter.module.scss';
import {Currency} from "entities/Currencies/index";
import {StopCheckboxes} from "widgets/StopCheckboxes/ui/StopCheckboxes";

interface FilterProps {
    className?: string
}

export const Filter = (props: FilterProps) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(cls.Filter, {}, [className])}>
            <Currency />
            <StopCheckboxes />
        </div>
    );
};