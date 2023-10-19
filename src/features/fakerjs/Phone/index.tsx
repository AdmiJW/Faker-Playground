import { PageTitle } from '@/core/components/FakerSection';

import { IMEI } from './IMEI';
import { Number } from './Number';

export function PhonePage() {
    return (
        <>
            <PageTitle title='Phone 📞' />

            <IMEI />
            <Number />
        </>
    );
}
