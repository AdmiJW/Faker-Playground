'use client';

import { Abbreviation } from './Abbreviation';
import { Adjective } from './Adjective';
import { IngVerb } from './IngVerb';
import { Noun } from './Noun';
import { Phrase } from './Phrase';
import { Verb } from './Verb';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function HackerPage() {
    const t = useDict().hacker;

    return (
        <>
            <PageTitle title={t.title} />

            <Abbreviation />
            <Adjective />
            <IngVerb />
            <Noun />
            <Phrase />
            <Verb />
        </>
    );
}
