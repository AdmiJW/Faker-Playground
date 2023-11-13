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
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    appendSlash: z.boolean(),
    protocol: z.enum(['http', 'https']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.url>;

export function Url() {
    const t = useDict().internet.url;
    const faker = useFaker();

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='url' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label={t.appendSlashLabel}
                    checked={formik.values.appendSlash}
                    tooltip={t.appendSlashTooltip}
                    onChange={(newValue) =>
                        formik.setFieldValue('appendSlash', newValue)
                    }
                />
                <Select
                    name='protocol'
                    label={t.protocolLabel}
                    onChange={formik.handleChange}
                    value={formik.values.protocol}
                    tooltip={t.protocolTooltip}
                    options={[
                        { label: t.optionHttp, value: 'http' },
                        { label: t.optionHttps, value: 'https' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
