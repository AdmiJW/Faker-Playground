'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Checkbox } from '@core/components/FakerSection';

const tooltip = `Returns a random ordinal direction (northwest, southeast, etc).`;

const Schema = z.object({
    abbreviated: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.ordinalDirection>;

export function OrdinalDirection() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            abbreviated: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const ordinalDirection = faker.location.ordinalDirection({
                abbreviated: values.abbreviated,
            });
            setOutput(ordinalDirection);
            toast.success('Faked ordinal direction!');
        },
    });

    return (
        <FakerSection
            title='Ordinal Direction'
            id='ordinal-direction'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Abbreviated'
                    tooltip='If true this will return abbreviated directions (NW, SE, etc). Otherwise this will return the long name.'
                    checked={formik.values.abbreviated}
                    onChange={(newValue) =>
                        formik.setFieldValue('abbreviated', newValue)
                    }
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
