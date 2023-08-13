import { AiOutlineFileAdd, AiOutlineHome } from 'react-icons/ai';
import { MdArticle } from 'react-icons/md';
import { PiFolderSimpleUser } from 'react-icons/pi';
import { GiPapers } from 'react-icons/gi';
import { Links } from '@/widgets/Sidebar/model/item';

export function sidebarIconRender(icon: Links) {
    switch (icon) {
    case Links.Main:
        return <AiOutlineHome />;
    case Links.About:
        return <MdArticle />;
    case Links.Articles:
        return <GiPapers />;
    case Links.CreateArticle:
        return <AiOutlineFileAdd />;
    case Links.MyArticles:
        return <PiFolderSimpleUser />;
    default:
        break;
    }
    return null;
}
