import { PageTitle } from '@/core/components/FakerSection';

import { Lines } from './Lines';
import { Paragraph } from './Paragraph';
import { Paragraphs } from './Paragraphs';
import { Sentence } from './Sentence';
import { Sentences } from './Sentences';
import { Slug } from './Slug';
import { Text } from './Text';
import { Word } from './Word';
import { Words } from './Words';

export function LoremPage() {
    return (
        <>
            <PageTitle title='Lorem 📝' />

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
