'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import {
    FakerSection,
    Output,
    TextInput,
    Checkbox,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates a random GPS coordinate within the specified radius from the given coordinate.`;

const Schema = z.object({
    isMetric: z.boolean(),
    originLatitude: z.number().min(-90).max(90).optional(),
    originLongitude: z.number().min(-180).max(180).optional(),
    radius: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.nearbyGPSCoordinate>;

export function NearbyGPSCoordinate() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            isMetric: true,
            originLatitude: undefined,
            originLongitude: undefined,
            radius: 0,
        },
        validationSchema,
        onSubmit: (values) => {
            const isOriginLatitudeValid =
                values.originLatitude !== undefined &&
                values.originLongitude !== undefined;

            const nearbyGPSCoordinate = faker.location.nearbyGPSCoordinate({
                isMetric: values.isMetric,
                origin: isOriginLatitudeValid
                    ? [values.originLatitude!, values.originLongitude!]
                    : undefined,
                radius: values.radius,
            });
            setOutput(nearbyGPSCoordinate);
            toast.success('Faked nearby GPS coordinate!');
        },
    });

    const randomizeLatitude = () =>
        formik.setFieldValue('originLatitude', faker.location.latitude());
    const randomizeLongitude = () =>
        formik.setFieldValue('originLongitude', faker.location.longitude());

    return (
        <FakerSection
            title='Nearby GPS Coordinate'
            id='nearby-gps-coordinate'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Metric'
                    onChange={(newValue) =>
                        formik.setFieldValue('isMetric', newValue)
                    }
                    checked={formik.values.isMetric}
                    tooltip='If true assume the radius to be in kilometers. If false for miles.'
                />
                <TextInput
                    type='number'
                    label='Origin Latitude'
                    name='originLatitude'
                    value={formik.values.originLatitude?.toString() || ''}
                    onChange={formik.handleChange}
                    error={formik.errors.originLatitude}
                    tooltip='The original coordinate to get a new coordinate close to. If no coordinate is given, a random one will be chosen.'
                    randomFn={randomizeLatitude}
                />
                <TextInput
                    type='number'
                    label='Origin Longitude'
                    name='originLongitude'
                    value={formik.values.originLongitude?.toString() || ''}
                    onChange={formik.handleChange}
                    error={formik.errors.originLongitude}
                    tooltip='The original coordinate to get a new coordinate close to. If no coordinate is given, a random one will be chosen.'
                    randomFn={randomizeLongitude}
                />
                <TextInput
                    type='number'
                    label='Radius'
                    name='radius'
                    value={formik.values.radius.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.radius}
                    tooltip='The maximum distance from the given coordinate to the new coordinate.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
