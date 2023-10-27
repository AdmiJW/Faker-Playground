'use client';

import { Bicycle } from './Bicycle';
import { Color } from './Color';
import { Fuel } from './Fuel';
import { Manufacturer } from './Manufacturer';
import { Model } from './Model';
import { Type } from './Type';
import { Vehicle } from './Vehicle';
import { VIN } from './VIN';
import { VRM } from './VRM';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function VehiclePage() {
    const t = useDict().vehicle;

    return (
        <>
            <PageTitle title={t.title} />

            <Bicycle />
            <Color />
            <Fuel />
            <Manufacturer />
            <Model />
            <Type />
            <Vehicle />
            <VIN />
            <VRM />
        </>
    );
}
