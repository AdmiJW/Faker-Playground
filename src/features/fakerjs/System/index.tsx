'use client';

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

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function SystemPage() {
    const t = useDict().system;

    return (
        <>
            <PageTitle title={t.title} />

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
