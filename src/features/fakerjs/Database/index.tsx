'use client';

import { Collation } from './Collation';
import { Column } from './Column';
import { Engine } from './Engine';
import { MongoDBObjectID } from './MongoDBObjectID';
import { Type } from './Type';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function DatabasePage() {
    const t = useDict().database;

    return (
        <>
            <PageTitle title={t.title} />

            <Collation />
            <Column />
            <Engine />
            <MongoDBObjectID />
            <Type />
        </>
    );
}
