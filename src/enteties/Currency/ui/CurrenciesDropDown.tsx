import React, { FC, useState } from 'react';
import { CURRENCIES } from '../model/types/currencies';

type Props = {
    defaultCurrency: CURRENCIES
    canEdit: boolean
    setCurrentCurrency: (val: string) => void
}

const CurrenciesDropDown:FC<Props> = ({ canEdit, defaultCurrency, setCurrentCurrency }) => {
    const [value, setSelectedValue] = useState('');

    return (
        <select onChange={(e) => setCurrentCurrency(e.currentTarget.value)} disabled={canEdit} defaultValue={defaultCurrency}>
            {
                Object.values(CURRENCIES).map((item) => <option key={item} value={item}>{item}</option>)
            }
        </select>

    );
};

export default CurrenciesDropDown;
