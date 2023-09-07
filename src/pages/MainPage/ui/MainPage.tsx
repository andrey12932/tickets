import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Flights } from "entities/Flights";
import {Filter} from "widgets/Filter/ui/Filter";
import cls from "./MainPage.module.scss";
import {ThemeToggler} from "widgets/ThemeToggler/ui/ThemeToggler";
import { useMediaQuery } from 'react-responsive'
import SettingsIcon from 'shared/assets/settings.svg';
import {classNames} from "shared/lib/classNames/classNames";

const MainPage = () => {
    const { t } = useTranslation('main')

    const isTablet = useMediaQuery({ query: '(max-width: 1224px)' })
    const [showSettings, setShowSettings] = useState<boolean>(false)

    return (
        <div className={cls.main}>
            {
                isTablet ?
                    <>
                        <button onClick={() => setShowSettings(prev => !prev)} className={cls.settings__button}>
                            <SettingsIcon className={cls.settings__icon} />
                        </button>
                        <div className={classNames(cls.sidebar, {
                            [cls.opened]: showSettings || !isTablet
                        })}>
                            <Filter/>
                            <ThemeToggler/>
                        </div>
                    </>
                     :
                    <div className={classNames(cls.sidebar)}>
                        <Filter/>
                        <ThemeToggler/>
                    </div>
            }
            <Flights />

        </div>
    )
}

export default MainPage
