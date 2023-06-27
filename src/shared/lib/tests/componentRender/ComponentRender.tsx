import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { RootState } from 'app/providers/ReduxProvider/config/store';
import ReduxProvider from 'app/providers/ReduxProvider/ui/ReduxProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

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
                    <I18nextProvider i18n={i18nForTest}>
                        {component}
                    </I18nextProvider>
                </ThemeProvider>
            </MemoryRouter>
        </ReduxProvider>,
    );
}
