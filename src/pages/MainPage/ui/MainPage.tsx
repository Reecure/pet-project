import {useTranslation} from 'react-i18next';
import {FC} from 'react';
import Header from "@/pages/MainPage/ui/Header/Header";

interface Props {

}

const MainPage: FC<Props> = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Header/>
            {/*<MainContent/>*/}

        </div>
    );
};

export default MainPage;
