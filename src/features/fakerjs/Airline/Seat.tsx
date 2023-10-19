'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';

const tooltip = `Generates a random seat.`;

const Schema = z.object({
    aircraftType: z.enum(['narrowbody', 'regional', 'widebody']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.airline.seat>;

export function Seat() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            aircraftType: 'narrowbody',
        },
        validationSchema,
        onSubmit: (values) => {
            const seat = faker.airline.seat({
                aircraftType: values.aircraftType,
            });
            setOutput(seat);
            toast.success('Faked seat!');
        },
    });

    return (
        <FakerSection title='Seat' id='seat' tooltip={tooltip}>
            <div className='flex-1'>
                <Select
                    label='Aircraft Type'
                    value={formik.values.aircraftType}
                    onChange={formik.handleChange}
                    name='aircraftType'
                    options={[
                        { value: 'narrowbody', label: 'Narrowbody' },
                        { value: 'regional', label: 'Regional' },
                        { value: 'widebody', label: 'Widebody' },
                    ]}
                    tooltip='The aircraft type.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
