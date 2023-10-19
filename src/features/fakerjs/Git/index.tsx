import { PageTitle } from '@/core/components/FakerSection';

import { Branch } from './Branch';
import { CommitDate } from './CommitDate';
import { CommitEntry } from './CommitEntry';
import { CommitMessage } from './CommitMessage';
import { CommitSHA } from './CommitSHA';

export function GitPage() {
    return (
        <>
            <PageTitle title='Git 🌿' />

            <Branch />
            <CommitDate />
            <CommitEntry />
            <CommitMessage />
            <CommitSHA />
        </>
    );
}
