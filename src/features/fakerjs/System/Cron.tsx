'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Checkbox } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random cron expression.`;

const Schema = z.object({
    includeNonStandard: z.boolean(),
    includeYear: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.system.cron>;

export function Cron() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            includeNonStandard: false,
            includeYear: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const cron = faker.system.cron({
                includeNonStandard: values.includeNonStandard,
                includeYear: values.includeYear,
            });
            setOutput(cron);
            toast.success('Faked cron!');
        },
    });

    return (
        <FakerSection title='Cron' id='cron' tooltip={tooltip}>
            <div className='flex flex-1 flex-col'>
                <Checkbox
                    checked={formik.values.includeNonStandard}
                    label='Include Non-Standard'
                    tooltip='Whether to include a @yearly, @monthly, @daily, etc text labels in the generated expression.'
                    onChange={(newValue) =>
                        formik.setFieldValue('includeNonStandard', newValue)
                    }
                />
                <Checkbox
                    checked={formik.values.includeYear}
                    label='Include Year'
                    tooltip='Whether to include a year in the generated expression.'
                    onChange={(newValue) =>
                        formik.setFieldValue('includeYear', newValue)
                    }
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
