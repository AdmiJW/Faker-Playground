import { PageTitle } from '@/core/components/FakerSection';

import { Avatar } from './Avatar';
import { AvatarGitHub } from './AvatarGitHub';
import { AvatarLegacy } from './AvatarLegacy';
import { DataUri } from './DataUri';
import { Url } from './Url';
import { UrlLoremFlickr } from './UrlLoremFlickr';
import { UrlPicsumPhotos } from './UrlPicsumPhotos';
import { UrlPlaceholder } from './UrlPlaceholder';

export function ImagePage() {
    return (
        <>
            <PageTitle title='Image 📷' />

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
