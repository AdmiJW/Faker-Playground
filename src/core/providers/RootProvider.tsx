import { MuiThemeProvider } from './MuiThemeProvider';
import { FontProvider } from './FontProvider';
import { ReactHotToastProvider } from './ReactHotToastProvider';
import { DateTimeLocalizationProvider } from './DateTimeLocalizationProvider';
import { ApplicationInitializer } from './ApplicationInitializer';

export function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <MuiThemeProvider>
            <FontProvider>
                <DateTimeLocalizationProvider>
                    <ReactHotToastProvider>
                        <ApplicationInitializer>
                            {children}
                        </ApplicationInitializer>
                    </ReactHotToastProvider>
                </DateTimeLocalizationProvider>
            </FontProvider>
        </MuiThemeProvider>
    );
}
