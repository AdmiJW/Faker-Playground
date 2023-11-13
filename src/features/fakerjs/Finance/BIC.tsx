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
    includeBranchCode: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.bic>;

export function BIC() {
    const t = useDict().finance.bic;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            includeBranchCode: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const BIC = faker.finance.bic({
                includeBranchCode: values.includeBranchCode,
            });
            setOutput(BIC);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='bic' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label={t.includeBranchCodeLabel}
                    checked={formik.values.includeBranchCode}
                    onChange={(newValue) =>
                        formik.setFieldValue('includeBranchCode', newValue)
                    }
                    tooltip={t.includeBranchCodeTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
