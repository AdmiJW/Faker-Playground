'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Checkbox } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    abbreviated: z.boolean(),
    context: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.month>;

export function Month() {
    const t = useDict().date.month;
    const faker = useFaker();

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='month' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col'>
                <Checkbox
                    checked={formik.values.abbreviated}
                    label={t.abbreviatedLabel}
                    tooltip={t.abbreviatedTooltip}
                    onChange={(newValue) =>
                        formik.setFieldValue('abbreviated', newValue)
                    }
                />
                <Checkbox
                    checked={formik.values.context}
                    label={t.contextLabel}
                    tooltip={t.contextTooltip}
                    onChange={(newValue) =>
                        formik.setFieldValue('context', newValue)
                    }
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
