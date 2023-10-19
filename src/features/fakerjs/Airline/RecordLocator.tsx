'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Checkbox } from '@core/components/FakerSection';

const tooltip = `
    Generates a random record locator. Record locators are used by airlines to identify reservations. 
    They're also known as booking reference numbers, locator codes, confirmation codes, or reservation codes.
`;

const Schema = z.object({
    allowNumeric: z.boolean(),
    allowVisuallySimilarCharacters: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.airline.recordLocator>;

export function RecordLocator() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            allowNumeric: false,
            allowVisuallySimilarCharacters: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const recordLocator = faker.airline.recordLocator({
                allowNumerics: values.allowNumeric,
                allowVisuallySimilarCharacters:
                    values.allowVisuallySimilarCharacters,
            });
            setOutput(recordLocator);
            toast.success('Faked record locator!');
        },
    });

    return (
        <FakerSection
            title='Record Locator'
            id='record-locator'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col'>
                <Checkbox
                    checked={formik.values.allowNumeric}
                    label='Allow Numeric'
                    tooltip='Whether to allow numeric characters.'
                    onChange={(newValue) =>
                        formik.setFieldValue('allowNumeric', newValue)
                    }
                />
                <Checkbox
                    checked={formik.values.allowVisuallySimilarCharacters}
                    label='Allow Visually Similar Characters'
                    tooltip="Whether to allow visually similar characters such as '1' and 'I'."
                    onChange={(newValue) =>
                        formik.setFieldValue(
                            'allowVisuallySimilarCharacters',
                            newValue
                        )
                    }
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
