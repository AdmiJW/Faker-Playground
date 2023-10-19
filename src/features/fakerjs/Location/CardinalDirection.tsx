'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Checkbox } from '@core/components/FakerSection';

const tooltip = `Returns a random cardinal direction (north, east, south, west).`;

const Schema = z.object({
    abbreviated: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.cardinalDirection>;

export function CardinalDirection() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            abbreviated: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const cardinalDirection = faker.location.cardinalDirection({
                abbreviated: values.abbreviated,
            });
            setOutput(cardinalDirection);
            toast.success('Faked cardinal direction!');
        },
    });

    return (
        <FakerSection
            title='Cardinal Direction'
            id='cardinal-direction'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Abbreviated'
                    tooltip='If true this will return abbreviated directions (N, E, etc). Otherwise this will return the long name.'
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
