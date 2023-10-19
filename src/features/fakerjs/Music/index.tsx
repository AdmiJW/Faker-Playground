import { PageTitle } from '@/core/components/FakerSection';

import { Genre } from './Genre';
import { SongName } from './SongName';

export function MusicPage() {
    return (
        <>
            <PageTitle title='Music 🎵' />

            <Genre />
            <SongName />
        </>
    );
}
