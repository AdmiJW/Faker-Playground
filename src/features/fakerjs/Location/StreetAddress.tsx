'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Checkbox } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates a random localized street address.`;

const Schema = z.object({
    useFullAddress: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.streetAddress>;

export function StreetAddress() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            useFullAddress: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const streetAddress = faker.location.streetAddress({
                useFullAddress: values.useFullAddress,
            });
            setOutput(streetAddress);
            toast.success('Faked street address!');
        },
    });

    return (
        <FakerSection
            title='Street Address'
            id='street-address'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Use Full Address'
                    tooltip='When true this will generate a full address. Otherwise it will just generate a street address.'
                    checked={formik.values.useFullAddress}
                    onChange={(newValue) =>
                        formik.setFieldValue('useFullAddress', newValue)
                    }
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
