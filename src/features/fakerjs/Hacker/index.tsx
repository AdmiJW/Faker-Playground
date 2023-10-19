import { PageTitle } from '@/core/components/FakerSection';

import { Abbreviation } from './Abbreviation';
import { Adjective } from './Adjective';
import { IngVerb } from './IngVerb';
import { Noun } from './Noun';
import { Phrase } from './Phrase';
import { Verb } from './Verb';

export function HackerPage() {
    return (
        <>
            <PageTitle title='Hacker 👨🏻‍💻' />

            <Abbreviation />
            <Adjective />
            <IngVerb />
            <Noun />
            <Phrase />
            <Verb />
        </>
    );
}
