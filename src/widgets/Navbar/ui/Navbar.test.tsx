import {ComponentRender} from "@/shared/lib/tests";
import {Navbar} from "@/widgets/Navbar";
import {fireEvent, screen, waitFor} from "@testing-library/react";


describe('navbar', () => {
    test('navbar component rendered', async () => {

        ComponentRender(<Navbar openSideBar={() => {
        }}/>);

        await waitFor(() => {
            const navbarElement = screen.getByTestId('navbar');
            expect(navbarElement).toBeInTheDocument();
        })


    })
    test('navbar component renders with openSideBar prop', () => {
        const openSideBarMock = jest.fn();
        ComponentRender(<Navbar openSideBar={openSideBarMock}/>);

        const sidebarButton = screen.getByTestId('sidebar-button');
        fireEvent.click(sidebarButton);

        expect(openSideBarMock).toHaveBeenCalledTimes(1);
    });

    test('navbar component renders without authenticated user', () => {
        ComponentRender(<Navbar openSideBar={() => {
        }}/>,);

        const loginButton = screen.getByText('Login');
        expect(loginButton).toBeInTheDocument();
    });

});
