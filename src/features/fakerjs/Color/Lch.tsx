'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';

const tooltip = `
    Returns an LCH color. Even though upper bound of chroma in LCH color space is theoretically unbounded, 
    it is bounded to 230 as anything above will not make a noticeable difference in the browser.
`;

const Schema = z.object({
    format: z.enum(['binary', 'css', 'decimal']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.color.lch>;

export function Lch() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            format: 'decimal',
        },
        validationSchema,
        onSubmit: (values) => {
            const lch = faker.color.lch({
                format: values.format,
            });
            setOutput(lch);
            toast.success('Faked lch!');
        },
    });

    return (
        <FakerSection title='LCH' id='lch' tooltip={tooltip}>
            <div className='flex-1'>
                <Select
                    label='Format'
                    value={formik.values.format}
                    onChange={formik.handleChange}
                    name='format'
                    options={[
                        { value: 'binary', label: 'Binary' },
                        { value: 'css', label: 'CSS' },
                        { value: 'decimal', label: 'Decimal' },
                    ]}
                    tooltip='Format of generated LCH color.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
