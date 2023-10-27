'use client';

import { Adjective } from './Adjective';
import { Adverb } from './Adverb';
import { Conjunction } from './Conjunction';
import { Interjection } from './Interjection';
import { Noun } from './Noun';
import { Preposition } from './Preposition';
import { Sample } from './Sample';
import { Verb } from './Verb';
import { Words } from './Words';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function WordPage() {
    const t = useDict().word;

    return (
        <>
            <PageTitle title={t.title} />

            <Adjective />
            <Adverb />
            <Conjunction />
            <Interjection />
            <Noun />
            <Preposition />
            <Sample />
            <Verb />
            <Words />
        </>
    );
}
