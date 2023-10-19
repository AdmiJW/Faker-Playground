'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Checkbox } from '@core/components/FakerSection';

const tooltip = `Returns a random name of a month.`;

const Schema = z.object({
    abbreviated: z.boolean(),
    context: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.month>;

export function Month() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            abbreviated: false,
            context: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const month = faker.date.month({
                abbreviated: values.abbreviated,
                context: values.context,
            });
            setOutput(month);
            toast.success('Faked month!');
        },
    });

    return (
        <FakerSection title='Month' id='month' tooltip={tooltip}>
            <div className='flex flex-1 flex-col'>
                <Checkbox
                    checked={formik.values.abbreviated}
                    label='Abbreviated'
                    tooltip='Whether to return an abbreviation.'
                    onChange={(newValue) =>
                        formik.setFieldValue('abbreviated', newValue)
                    }
                />
                <Checkbox
                    checked={formik.values.context}
                    label='Context'
                    tooltip="Whether to return the name of a month in the context of a date. In the default en locale this has no effect, however, in other locales like fr or ru, this may affect grammar or capitalization, for example 'январь' with { context: false } and 'января' with { context: true } in ru."
                    onChange={(newValue) =>
                        formik.setFieldValue('context', newValue)
                    }
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
