import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { RootState } from '@/app/providers/ReduxProvider/config/store';
import ReduxProvider from '@/app/providers/ReduxProvider/ui/ReduxProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { i18nForTests } from '../../../../config/index';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<RootState>;
}

export function ComponentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
    } = options;
    return render(
        <ReduxProvider>
            <MemoryRouter initialEntries={[route]}>
                <ThemeProvider>
                    <I18nextProvider i18n={i18nForTests}>
                        {component}
                    </I18nextProvider>
                </ThemeProvider>
            </MemoryRouter>
        </ReduxProvider>,
    );
}
