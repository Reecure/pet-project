import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../config/store';

type Props = {}

const ReduxProvider:FC<Props> = ({ children }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
);

export default ReduxProvider;
