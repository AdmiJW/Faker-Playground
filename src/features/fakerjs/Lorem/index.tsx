'use client';

import { Lines } from './Lines';
import { Paragraph } from './Paragraph';
import { Paragraphs } from './Paragraphs';
import { Sentence } from './Sentence';
import { Sentences } from './Sentences';
import { Slug } from './Slug';
import { Text } from './Text';
import { Word } from './Word';
import { Words } from './Words';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function LoremPage() {
    const t = useDict().lorem;

    return (
        <>
            <PageTitle title={t.title} />

            <Lines />
            <Paragraph />
            <Paragraphs />
            <Sentence />
            <Sentences />
            <Slug />
            <Text />
            <Word />
            <Words />
        </>
    );
}
