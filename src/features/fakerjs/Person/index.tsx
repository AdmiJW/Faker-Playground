import { PageTitle } from '@/core/components/FakerSection';

import { Bio } from './Bio';
import { FirstName } from './FirstName';
import { FullName } from './FullName';
import { Gender } from './Gender';
import { JobArea } from './JobArea';
import { JobDescriptor } from './JobDescriptor';
import { JobTitle } from './JobTitle';
import { JobType } from './JobType';
import { LastName } from './LastName';
import { MiddleName } from './MiddleName';
import { Prefix } from './Prefix';
import { Sex } from './Sex';
import { SexType } from './SexType';
import { Suffix } from './Suffix';
import { ZodiacSign } from './ZodiacSign';

export function PersonPage() {
    return (
        <>
            <PageTitle title='Person 👨🏻' />

            <Bio />
            <FirstName />
            <FullName />
            <Gender />
            <JobArea />
            <JobDescriptor />
            <JobTitle />
            <JobType />
            <LastName />
            <MiddleName />
            <Prefix />
            <Sex />
            <SexType />
            <Suffix />
            <ZodiacSign />
        </>
    );
}
