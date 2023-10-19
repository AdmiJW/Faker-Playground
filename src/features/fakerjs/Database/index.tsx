import { PageTitle } from '@/core/components/FakerSection';

import { Collation } from './Collation';
import { Column } from './Column';
import { Engine } from './Engine';
import { MongoDBObjectID } from './MongoDBObjectID';
import { Type } from './Type';

export function DatabasePage() {
    return (
        <>
            <PageTitle title='Database 🗄️' />

            <Collation />
            <Column />
            <Engine />
            <MongoDBObjectID />
            <Type />
        </>
    );
}
