import Ba from 'shared/assets/ba.svg';
import S7 from 'shared/assets/s7.svg';
import Su from 'shared/assets/su.svg';
import Tk from 'shared/assets/tk.svg'
import React from "react";
import cls from './CompanyLogo.module.scss'

interface CompanyLogoProps {
    companyName: companyNames;
}

 export enum companyNames {
    BA = 'BA',
    S7 = 'S7',
    SU = 'SU',
    TK = 'TK'
}

export const CompanyLogo = (props: CompanyLogoProps) => {
    const {
        companyName
    } = props;

    const companyIcons: Record<string, React.VFC<React.SVGProps<SVGSVGElement>>> = {
        [companyNames.BA]: Ba,
        [companyNames.S7]: S7,
        [companyNames.SU]: Su,
        [companyNames.TK]: Tk
    }

    const Logo = companyIcons[companyName];

    return (
        <div className={cls.logo}>
            <Logo className={cls.logo__item} />
        </div>
    );
};