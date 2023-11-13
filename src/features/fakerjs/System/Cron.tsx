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
    includeNonStandard: z.boolean(),
    includeYear: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.system.cron>;

export function Cron() {
    const t = useDict().system.cron;
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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='cron' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col'>
                <Checkbox
                    checked={formik.values.includeNonStandard}
                    label={t.includeNonStandardLabel}
                    tooltip={t.includeNonStandardTooltip}
                    onChange={(newValue) =>
                        formik.setFieldValue('includeNonStandard', newValue)
                    }
                />
                <Checkbox
                    checked={formik.values.includeYear}
                    label={t.includeYearLabel}
                    tooltip={t.includeYearTooltip}
                    onChange={(newValue) =>
                        formik.setFieldValue('includeYear', newValue)
                    }
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
