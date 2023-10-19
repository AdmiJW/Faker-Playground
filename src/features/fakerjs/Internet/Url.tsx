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
    Select,
    Checkbox,
} from '@core/components/FakerSection';

const tooltip = `Generates a random http(s) url.`;

const Schema = z.object({
    appendSlash: z.boolean(),
    protocol: z.enum(['http', 'https']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.url>;

export function Url() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            appendSlash: false,
            protocol: 'https',
        },
        validationSchema,
        onSubmit: (values) => {
            const url = faker.internet.url({
                appendSlash: values.appendSlash,
                protocol: values.protocol,
            });
            setOutput(url);
            toast.success('Faked url!');
        },
    });

    return (
        <FakerSection title='Url' id='url' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Append Slash'
                    checked={formik.values.appendSlash}
                    tooltip='Whether to append a slash to the end of the url (path).'
                    onChange={(newValue) =>
                        formik.setFieldValue('appendSlash', newValue)
                    }
                />
                <Select
                    name='protocol'
                    label='Protocol'
                    onChange={formik.handleChange}
                    value={formik.values.protocol}
                    tooltip='The protocol to use.'
                    options={[
                        { label: 'http', value: 'http' },
                        { label: 'https', value: 'https' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
