'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    aircraftType: z.enum(['narrowbody', 'regional', 'widebody']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.airline.seat>;

export function Seat() {
    const t = useDict().airline.seat;
    const faker = useFaker();

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='seat' tooltip={t.tooltip}>
            <div className='flex-1'>
                <Select
                    label={t.aircraftTypeLabel}
                    value={formik.values.aircraftType}
                    onChange={formik.handleChange}
                    name='aircraftType'
                    options={[
                        { value: 'narrowbody', label: t.optionNarrowBody },
                        { value: 'regional', label: t.optionWideBody },
                        { value: 'widebody', label: t.optionWideBody },
                    ]}
                    tooltip={t.aircraftTypeTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
