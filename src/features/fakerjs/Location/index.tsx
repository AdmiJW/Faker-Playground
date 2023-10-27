'use client';

import { BuildingNumber } from './BuildingNumber';
import { CardinalDirection } from './CardinalDirection';
import { City } from './City';
import { Country } from './Country';
import { CountryCode } from './CountryCode';
import { County } from './County';
import { Direction } from './Direction';
import { Latitude } from './Latitude';
import { Longitude } from './Longitude';
import { NearbyGPSCoordinate } from './NearbyGPSCoordinate';
import { OrdinalDirection } from './OrdinalDirection';
import { SecondaryAddress } from './SecondaryAddress';
import { State } from './State';
import { Street } from './Street';
import { StreetAddress } from './StreetAddress';
import { TimeZone } from './TimeZone';
import { ZipCode } from './ZipCode';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function LocationPage() {
    const t = useDict().location;

    return (
        <>
            <PageTitle title={t.title} />

            <BuildingNumber />
            <CardinalDirection />
            <City />
            <Country />
            <CountryCode />
            <County />
            <Direction />
            <Latitude />
            <Longitude />
            <NearbyGPSCoordinate />
            <OrdinalDirection />
            <SecondaryAddress />
            <State />
            <Street />
            <StreetAddress />
            <TimeZone />
            <ZipCode />
        </>
    );
}
