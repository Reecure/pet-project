import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsListStars } from 'react-icons/bs';

export function sidebarIconRender(icon: string) {
    switch (icon) {
    case 'AiOutlineHome':
        return <AiOutlineHome />;
    case 'BsListStars':
        return <BsListStars />;
    case 'BsFillPersonLinesFill':
        return <BsFillPersonLinesFill />;
    default:
        break;
    }
    return null;
}
