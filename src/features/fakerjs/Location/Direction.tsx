'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Checkbox } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random direction (cardinal and ordinal; northwest, east, etc).`;

const Schema = z.object({
    abbreviated: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.direction>;

export function Direction() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            abbreviated: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const direction = faker.location.direction({
                abbreviated: values.abbreviated,
            });
            setOutput(direction);
            toast.success('Faked direction!');
        },
    });

    return (
        <FakerSection title='Direction' id='direction' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Abbreviated'
                    tooltip='If true this will return abbreviated directions (NW, E, etc). Otherwise this will return the long name.'
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
