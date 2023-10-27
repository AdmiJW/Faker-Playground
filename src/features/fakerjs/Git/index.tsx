'use client';

import { Branch } from './Branch';
import { CommitDate } from './CommitDate';
import { CommitEntry } from './CommitEntry';
import { CommitMessage } from './CommitMessage';
import { CommitSHA } from './CommitSHA';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function GitPage() {
    const t = useDict().git;

    return (
        <>
            <PageTitle title={t.title} />

            <Branch />
            <CommitDate />
            <CommitEntry />
            <CommitMessage />
            <CommitSHA />
        </>
    );
}
