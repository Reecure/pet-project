import { Links } from '@/widgets/Sidebar/model/item';
import SvgIcon from '@/shared/ui/SvgIcon/SvgIcon';

const homeSvg = (
    <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-color"
        xmlns="http://www.w3.org/2000/svg"
    >

        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

        <g id="SVGRepo_iconCarrier">
            <path d="M22 22L2 22" strokeWidth="1.5" strokeLinecap="round" />
            <path
                d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path d="M4 22V9.5" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 9.5V13.5M20 22V17.5" strokeWidth="1.5" strokeLinecap="round" />
            <path
                d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                strokeWidth="1.5"
            />
        </g>

    </svg>
);

const articleSvg = (
    <svg
        viewBox="0 0 16 16"
        width="25px"
        height="25px"
        xmlns="http://www.w3.org/2000/svg"

    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            <path

                d="M8.6,4.99999 L8.6,12.6 L1.4,12.6 L1.4,1.4 L5,1.4 L5,4.99999 L8.6,4.99999 Z M7.6201,3.59999 L6.4,2.3799 L6.4,3.59999 L7.6201,3.59999 Z M10,4 L6,0 L0,0 L0,14 L10,14 L10,4 Z M2.79688,7 L7.2,7 L7.2,8.4 L2.79688,8.4 L2.79688,7 Z M7.2,9.8 L2.79688,9.8 L2.79688,11.2 L7.2,11.2 L7.2,9.8 Z"
                transform="translate(3 1)"
            />
        </g>
    </svg>
);

const listSvg = (
    <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >

        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

        <g id="SVGRepo_iconCarrier">
            <path
                d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>

    </svg>
);

export function sidebarIconRender(icon: Links) {
    switch (icon) {
    case Links.Main:
        return <SvgIcon Svg={homeSvg} />;
    case Links.About:
        return <SvgIcon Svg={articleSvg} />;
    case Links.Articles:
        return <SvgIcon Svg={listSvg} />;
    default:
        break;
    }
    return null;
}
