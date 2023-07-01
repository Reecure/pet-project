import React, { FC, useState } from 'react';
import { COUNTRIES } from '../model/types/countries';

type Props = {
    defaultCountrie: COUNTRIES
    canEdit: boolean
    setCurrentCountry: (val: string) => void
}

const CountriesDropDown:FC<Props> = ({ canEdit, defaultCountrie, setCurrentCountry }) => {
    const [value, setSelectedValue] = useState('');

    return (
        <select onChange={(e) => setCurrentCountry(e.currentTarget.value)} disabled={canEdit} defaultValue={defaultCountrie}>
            {
                Object.values(COUNTRIES).map((item) => <option value={item}>{item}</option>)
            }
        </select>

    );
};

export default CountriesDropDown;
