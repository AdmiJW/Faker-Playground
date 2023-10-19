'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';

const tooltip = `Generates a random mac address.`;

const Schema = z.object({
    separator: z.enum([':', '-', 'none']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.mac>;

export function MAC() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            separator: ':',
        },
        validationSchema,
        onSubmit: (values) => {
            const mac = faker.internet.mac({
                separator: values.separator === 'none' ? '' : values.separator,
            });
            setOutput(mac);
            toast.success('Faked mac!');
        },
    });

    return (
        <FakerSection title='MAC' id='mac' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label='Separator'
                    name='separator'
                    tooltip="The optional separator to use. Can be either ':', '-' or ''."
                    onChange={formik.handleChange}
                    value={formik.values.separator}
                    options={[
                        { label: ':', value: ':' },
                        { label: '-', value: '-' },
                        { label: 'None', value: 'none' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
