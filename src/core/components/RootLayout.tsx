import { RootProvider } from '@core/providers/RootProvider';
import { AnimatedBackground } from './AnimatedBackground';
import { Navbar } from './Navbar';
import { Drawer } from './Drawer';
import { Footer } from './Footer';

import '@core/globals.css';

export function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <RootProvider>
                    {/* Flex for drawer */}
                    <div className='flex'>
                        <Drawer />

                        <div className='flex-1'>
                            {/* Min-height to push footer down */}
                            <div className='flex min-h-screen flex-col'>
                                <Navbar />

                                <div className='container mx-auto flex max-w-5xl flex-1 flex-col'>
                                    {children}
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                    <AnimatedBackground />
                </RootProvider>
            </body>
        </html>
    );
}
