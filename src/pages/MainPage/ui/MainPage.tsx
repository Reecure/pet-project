import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import Header from '../ui/Header/Header';

interface Props {

}

const MainPage: FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div data-testid="mainpage">
            <Header />
        </div>
    );
};

export default MainPage;
