import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsListStars } from 'react-icons/bs';
import { PiArticleMediumBold } from 'react-icons/pi';

export function sidebarIconRender(icon: string) {
    switch (icon) {
    case 'AiOutlineHome':
        return <AiOutlineHome />;
    case 'BsListStars':
        return <BsListStars />;
    case 'BsFillPersonLinesFill':
        return <BsFillPersonLinesFill />;
    case 'PiArticleMediumBold':
        return <PiArticleMediumBold />;
    default:
        break;
    }
    return null;
}
