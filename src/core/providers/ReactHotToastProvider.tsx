import { Toaster } from 'react-hot-toast';

export function ReactHotToastProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <Toaster position='bottom-right' />
        </>
    );
}
