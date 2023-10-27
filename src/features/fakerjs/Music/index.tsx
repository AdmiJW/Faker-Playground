'use client';

import { Genre } from './Genre';
import { SongName } from './SongName';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function MusicPage() {
    const t = useDict().music;

    return (
        <>
            <PageTitle title={t.title} />

            <Genre />
            <SongName />
        </>
    );
}
