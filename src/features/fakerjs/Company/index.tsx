'use client';

import { BuzzAdjective } from './BuzzAdjective';
import { BuzzNoun } from './BuzzNoun';
import { BuzzPhrase } from './BuzzPhrase';
import { BuzzVerb } from './BuzzVerb';
import { CatchPhrase } from './CatchPhrase';
import { CatchPhraseAdjective } from './CatchPhraseAdjective';
import { CatchPhraseDescriptor } from './CatchPhraseDescriptor';
import { CatchPhraseNoun } from './CatchPhraseNoun';
import { Name } from './Name';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function CompanyPage() {
    const t = useDict().company;

    return (
        <>
            <PageTitle title={t.title} />

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
