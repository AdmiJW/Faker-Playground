'use client';

import { Bear } from './Bear';
import { Bird } from './Bird';
import { Cat } from './Cat';
import { Cetacean } from './Cetacean';
import { Cow } from './Cow';
import { Crocodilia } from './Crocodilia';
import { Dog } from './Dog';
import { Fish } from './Fish';
import { Horse } from './Horse';
import { Insect } from './Insect';
import { Lion } from './Lion';
import { Rabbit } from './Rabbit';
import { Rodent } from './Rodent';
import { Snake } from './Snake';
import { Type } from './Type';

import { PageTitle } from '@/core/components/FakerSection';
import { useDict } from '@locale';

export function AnimalPage() {
    const t = useDict().animal;

    return (
        <>
            <PageTitle title={t.title} />

            <Bear />
            <Bird />
            <Cat />
            <Cetacean />
            <Cow />
            <Crocodilia />
            <Dog />
            <Fish />
            <Horse />
            <Insect />
            <Lion />
            <Rabbit />
            <Rodent />
            <Snake />
            <Type />
        </>
    );
}
