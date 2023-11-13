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
    TextInput,
    Checkbox,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    ellipsis: z.boolean(),
    length: z.number().int().nonnegative(),
    parens: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.maskedNumber>;

export function MaskedNumber() {
    const t = useDict().finance.maskedNumber;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            ellipsis: true,
            length: 4,
            parens: true,
        },
        validationSchema,
        onSubmit: (values) => {
            const maskedNumber = faker.finance.maskedNumber({
                ellipsis: values.ellipsis,
                length: values.length,
                parens: values.parens,
            });
            setOutput(maskedNumber);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='masked-number' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label={t.ellipsisLabel}
                    checked={formik.values.ellipsis}
                    onChange={(newValue) =>
                        formik.setFieldValue('ellipsis', newValue)
                    }
                    tooltip={t.ellipsisTooltip}
                />
                <TextInput
                    type='number'
                    label={t.lengthLabel}
                    name='length'
                    onChange={formik.handleChange}
                    tooltip={t.lengthTooltip}
                    value={formik.values.length.toString()}
                    error={formik.errors.length}
                />
                <Checkbox
                    label={t.parensLabel}
                    checked={formik.values.parens}
                    onChange={(newValue) =>
                        formik.setFieldValue('parens', newValue)
                    }
                    tooltip={t.parensTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
