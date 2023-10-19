import { PageTitle } from '@/core/components/FakerSection';

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

export function DatePage() {
    return (
        <>
            <PageTitle title='Date 📅' />

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
