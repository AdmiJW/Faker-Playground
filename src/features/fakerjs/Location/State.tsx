'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Checkbox } from '@core/components/FakerSection';

const tooltip = `Returns a random localized state, or other equivalent first-level administrative entity for the locale's country such as a province or region.`;

const Schema = z.object({
    abbreviated: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.state>;

export function State() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            abbreviated: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const state = faker.location.state({
                abbreviated: values.abbreviated,
            });
            setOutput(state);
            toast.success('Faked state!');
        },
    });

    return (
        <FakerSection title='State' id='state' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Abbreviated'
                    tooltip='If true this will return abbreviated first-level administrative entity names. Otherwise this will return the long name.'
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
