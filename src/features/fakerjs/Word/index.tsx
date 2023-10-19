import { PageTitle } from '@/core/components/FakerSection';

import { Adjective } from './Adjective';
import { Adverb } from './Adverb';
import { Conjunction } from './Conjunction';
import { Interjection } from './Interjection';
import { Noun } from './Noun';
import { Preposition } from './Preposition';
import { Sample } from './Sample';
import { Verb } from './Verb';
import { Words } from './Words';

export function WordPage() {
    return (
        <>
            <PageTitle title='Word 📝' />

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
