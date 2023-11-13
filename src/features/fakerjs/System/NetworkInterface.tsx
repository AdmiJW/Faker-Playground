'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    interfaceSchema: z.enum(['index', 'mac', 'pci', 'slot']),
    interfaceType: z.enum(['en', 'wl', 'ww']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.system.networkInterface>;

export function NetworkInterface() {
    const t = useDict().system.networkInterface;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            interfaceSchema: 'index',
            interfaceType: 'en',
        },
        validationSchema,
        onSubmit: (values) => {
            const networkInterface = faker.system.networkInterface({
                interfaceSchema: values.interfaceSchema,
                interfaceType: values.interfaceType,
            });
            setOutput(networkInterface);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection
            title={t.title}
            id='network-interface'
            tooltip={t.tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label={t.interfaceSchemaLabel}
                    name='interfaceSchema'
                    onChange={formik.handleChange}
                    tooltip={t.interfaceSchemaTooltip}
                    value={formik.values.interfaceSchema}
                    options={[
                        { label: t.optionIndex, value: 'index' },
                        { label: t.optionMac, value: 'mac' },
                        { label: t.optionPci, value: 'pci' },
                        { label: t.optionSlot, value: 'slot' },
                    ]}
                />
                <Select
                    label={t.interfaceTypeLabel}
                    name='interfaceType'
                    onChange={formik.handleChange}
                    tooltip={t.interfaceTypeTooltip}
                    value={formik.values.interfaceType}
                    options={[
                        { label: t.optionEn, value: 'en' },
                        { label: t.optionWl, value: 'wl' },
                        { label: t.optionWw, value: 'ww' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
