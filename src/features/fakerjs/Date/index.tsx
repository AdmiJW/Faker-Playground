'use client';

import { Anytime } from './Anytime';
import { Between } from './Between';
import { Betweens } from './Betweens';
import { Birthdate } from './Birthdate';
import { Future } from './Future';
import { Month } from './Month';
import { Past } from './Past';
import { Recent } from './Recent';
import { Soon } from './Soon';
import { Weekday } from './Weekday';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function DatePage() {
    const t = useDict().date;

    return (
        <>
            <PageTitle title={t.title} />

            <Anytime />
            <Between />
            <Betweens />
            <Birthdate />
            <Future />
            <Month />
            <Past />
            <Recent />
            <Soon />
            <Weekday />
        </>
    );
}
