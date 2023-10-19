import { MuiThemeProvider } from './MuiThemeProvider';
import { FontProvider } from './FontProvider';
import { ReactHotToastProvider } from './ReactHotToastProvider';
import { DateTimeLocalizationProvider } from './DateTimeLocalizationProvider';

export function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <MuiThemeProvider>
            <FontProvider>
                <DateTimeLocalizationProvider>
                    <ReactHotToastProvider>{children}</ReactHotToastProvider>
                </DateTimeLocalizationProvider>
            </FontProvider>
        </MuiThemeProvider>
    );
}
