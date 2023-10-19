import { PageTitle } from '@/core/components/FakerSection';

import { Bicycle } from './Bicycle';
import { Color } from './Color';
import { Fuel } from './Fuel';
import { Manufacturer } from './Manufacturer';
import { Model } from './Model';
import { Type } from './Type';
import { Vehicle } from './Vehicle';
import { VIN } from './VIN';
import { VRM } from './VRM';

export function VehiclePage() {
    return (
        <>
            <PageTitle title='Vehicle 🚗' />

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
