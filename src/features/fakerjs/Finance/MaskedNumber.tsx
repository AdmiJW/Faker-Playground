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

const tooltip = `Generates a random masked number.`;

const Schema = z.object({
    ellipsis: z.boolean(),
    length: z.number().int().nonnegative(),
    parens: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.maskedNumber>;

export function MaskedNumber() {
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
            toast.success('Faked masked number!');
        },
    });

    return (
        <FakerSection
            title='Masked Number'
            id='masked-number'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Ellipsis'
                    checked={formik.values.ellipsis}
                    onChange={(newValue) =>
                        formik.setFieldValue('ellipsis', newValue)
                    }
                    tooltip='Whether to prefix the numbers with an ellipsis.'
                />
                <TextInput
                    type='number'
                    label='Length'
                    name='length'
                    onChange={formik.handleChange}
                    tooltip='The length of the unmasked number.'
                    value={formik.values.length.toString()}
                    error={formik.errors.length}
                />
                <Checkbox
                    label='Parens'
                    checked={formik.values.parens}
                    onChange={(newValue) =>
                        formik.setFieldValue('parens', newValue)
                    }
                    tooltip='Whether to use surrounding parenthesis.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
