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
import { useDict } from '@locale';

const Schema = z.object({
    addLeadingZeroes: z.boolean(),
    minMax: z.array(z.number().min(1).max(4)).length(2),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.airline.flightNumber>;

export function FlightNumber() {
    const t = useDict().airline.flightNumber;

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='flight-number' tooltip={t.tooltip}>
            <div className='flex-1'>
                <Checkbox
                    checked={formik.values.addLeadingZeroes}
                    label={t.addLeadingZeroesLabel}
                    tooltip={t.addLeadingZeroesTooltip}
                    onChange={(newValue) =>
                        formik.setFieldValue('addLeadingZeroes', newValue)
                    }
                />
                <Slider
                    label={t.lengthLabel}
                    name='minMax'
                    value={formik.values.minMax}
                    onChange={formik.handleChange}
                    min={1}
                    max={4}
                    step={1}
                    tooltip={t.lengthTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
