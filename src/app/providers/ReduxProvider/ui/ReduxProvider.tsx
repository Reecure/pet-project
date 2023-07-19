import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/store';

type Props = {
    children: React.ReactNode;
};

const ReduxProvider: FC<Props> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
