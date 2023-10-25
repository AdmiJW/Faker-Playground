'use client';

import { useInitializeLocale } from '@locale';

export function ApplicationInitializer({
    children,
}: {
    children: React.ReactNode;
}) {
    useInitializeLocale();

    return children;
}
