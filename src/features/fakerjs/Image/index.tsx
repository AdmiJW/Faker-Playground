'use client';

import { Avatar } from './Avatar';
import { AvatarGitHub } from './AvatarGitHub';
import { AvatarLegacy } from './AvatarLegacy';
import { DataUri } from './DataUri';
import { Url } from './Url';
import { UrlLoremFlickr } from './UrlLoremFlickr';
import { UrlPicsumPhotos } from './UrlPicsumPhotos';
import { UrlPlaceholder } from './UrlPlaceholder';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function ImagePage() {
    const t = useDict().image;

    return (
        <>
            <PageTitle title={t.title} />

            <Avatar />
            <AvatarGitHub />
            <AvatarLegacy />
            <DataUri />
            <Url />
            <UrlLoremFlickr />
            <UrlPicsumPhotos />
            <UrlPlaceholder />
        </>
    );
}
