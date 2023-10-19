import { PageTitle } from '@/core/components/FakerSection';

import { CommonFileExt } from './CommonFileExt';
import { CommonFileName } from './CommonFileName';
import { CommonFileType } from './CommonFileType';
import { Cron } from './Cron';
import { DirectoryPath } from './DirectoryPath';
import { FileExt } from './FileExt';
import { FileName } from './FileName';
import { FilePath } from './FilePath';
import { FileType } from './FileType';
import { MimeType } from './MimeType';
import { NetworkInterface } from './NetworkInterface';
import { SemVer } from './SemVer';

export function SystemPage() {
    return (
        <>
            <PageTitle title='System 🖥️' />

            <CommonFileExt />
            <CommonFileName />
            <CommonFileType />
            <Cron />
            <DirectoryPath />
            <FileExt />
            <FileName />
            <FilePath />
            <FileType />
            <MimeType />
            <NetworkInterface />
            <SemVer />
        </>
    );
}
