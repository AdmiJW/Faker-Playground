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
    allowNumeric: z.boolean(),
    allowVisuallySimilarCharacters: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.airline.recordLocator>;

export function RecordLocator() {
    const t = useDict().airline.recordLocator;
    const faker = useFaker();

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='record-locator' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col'>
                <Checkbox
                    checked={formik.values.allowNumeric}
                    label={t.allowNumericLabel}
                    tooltip={t.allowNumericTooltip}
                    onChange={(newValue) =>
                        formik.setFieldValue('allowNumeric', newValue)
                    }
                />
                <Checkbox
                    checked={formik.values.allowVisuallySimilarCharacters}
                    label={t.allowVisuallySimilarCharactersLabel}
                    tooltip={t.allowVisuallySimilarCharactersTooltip}
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
