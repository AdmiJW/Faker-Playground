'use client';

import { AircraftType } from './AircraftType';
import { Airline } from './Airline';
import { Airplane } from './Airplane';
import { Airport } from './Airport';
import { FlightNumber } from './FlightNumber';
import { RecordLocator } from './RecordLocator';
import { Seat } from './Seat';

import { PageTitle } from '@/core/components/FakerSection';
import { useDict } from '@locale';

export function AirlinePage() {
    const t = useDict().airline;
    return (
        <>
            <PageTitle title={t.title} />

            <AircraftType />
            <Airline />
            <Airplane />
            <Airport />
            <FlightNumber />
            <RecordLocator />
            <Seat />
        </>
    );
}
