import { PageTitle } from '@/core/components/FakerSection';

import { BuzzAdjective } from './BuzzAdjective';
import { BuzzNoun } from './BuzzNoun';
import { BuzzPhrase } from './BuzzPhrase';
import { BuzzVerb } from './BuzzVerb';
import { CatchPhrase } from './CatchPhrase';
import { CatchPhraseAdjective } from './CatchPhraseAdjective';
import { CatchPhraseDescriptor } from './CatchPhraseDescriptor';
import { CatchPhraseNoun } from './CatchPhraseNoun';
import { Name } from './Name';

export function CompanyPage() {
    return (
        <>
            <PageTitle title='Company 🏢' />

            <BuzzAdjective />
            <BuzzNoun />
            <BuzzPhrase />
            <BuzzVerb />
            <CatchPhrase />
            <CatchPhraseAdjective />
            <CatchPhraseDescriptor />
            <CatchPhraseNoun />
            <Name />
        </>
    );
}
