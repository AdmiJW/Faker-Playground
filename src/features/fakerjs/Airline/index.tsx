import { AircraftType } from './AircraftType';
import { Airline } from './Airline';
import { Airplane } from './Airplane';
import { Airport } from './Airport';
import { FlightNumber } from './FlightNumber';
import { RecordLocator } from './RecordLocator';
import { Seat } from './Seat';

import { PageTitle } from '@/core/components/FakerSection';

export function AirlinePage() {
    return (
        <>
            <PageTitle title='Airline ✈️' />

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
