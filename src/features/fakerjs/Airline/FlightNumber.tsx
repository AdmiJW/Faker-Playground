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
    Checkbox,
    Slider,
} from '@core/components/FakerSection';

const tooltip = `
    Returns a random flight number. 
    Flight numbers are always 1 to 4 digits long.
    Sometimes they are used without leading zeros (e.g.: American Airlines flight 425) and
    sometimes with leading zeros, often with the airline code prepended (e.g.: AA0425).
`;

const Schema = z.object({
    addLeadingZeroes: z.boolean(),
    minMax: z.array(z.number().min(1).max(4)).length(2),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.airline.flightNumber>;

export function FlightNumber() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            addLeadingZeroes: false,
            minMax: [1, 4],
        },
        validationSchema,
        onSubmit: (values) => {
            const flightNumber = faker.airline.flightNumber({
                addLeadingZeros: values.addLeadingZeroes,
                length: { min: values.minMax[0], max: values.minMax[1] },
            });
            setOutput(flightNumber);
            toast.success('Faked flight number!');
        },
    });

    return (
        <FakerSection
            title='Flight Number'
            id='flight-number'
            tooltip={tooltip}
        >
            <div className='flex-1'>
                <Checkbox
                    checked={formik.values.addLeadingZeroes}
                    label='Add Leading Zeroes'
                    tooltip='Whether to pad the flight number up to 4 digits with leading zeros.'
                    onChange={(newValue) =>
                        formik.setFieldValue('addLeadingZeroes', newValue)
                    }
                />
                <Slider
                    label='Length'
                    name='minMax'
                    value={formik.values.minMax}
                    onChange={formik.handleChange}
                    min={1}
                    max={4}
                    step={1}
                    tooltip='The number or range of digits to generate.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
