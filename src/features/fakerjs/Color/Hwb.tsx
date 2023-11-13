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
    format: z.enum(['binary', 'css', 'decimal']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.color.hwb>;

export function Hwb() {
    const t = useDict().color.hwb;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            format: 'decimal',
        },
        validationSchema,
        onSubmit: (values) => {
            const hwb = faker.color.hwb({
                format: values.format,
            });
            setOutput(hwb);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='hwb' tooltip={t.tooltip}>
            <div className='flex-1'>
                <Select
                    label={t.formatLabel}
                    value={formik.values.format}
                    onChange={formik.handleChange}
                    name='format'
                    options={[
                        { value: 'binary', label: t.optionBinary },
                        { value: 'css', label: t.optionCss },
                        { value: 'decimal', label: t.optionDecimal },
                    ]}
                    tooltip={t.formatTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
