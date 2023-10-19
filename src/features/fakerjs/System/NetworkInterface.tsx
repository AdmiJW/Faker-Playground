'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';

const tooltip = `Returns a random network interface.`;

const Schema = z.object({
    interfaceSchema: z.enum(['index', 'mac', 'pci', 'slot']),
    interfaceType: z.enum(['en', 'wl', 'ww']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.system.networkInterface>;

export function NetworkInterface() {
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
            toast.success('Faked network interface!');
        },
    });

    return (
        <FakerSection
            title='Network Interface'
            id='network-interface'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label='Interface Schema'
                    name='interfaceSchema'
                    onChange={formik.handleChange}
                    tooltip='The interface schema. Can be one of index, slot, mac, pci.'
                    value={formik.values.interfaceSchema}
                    options={[
                        { label: 'Index', value: 'index' },
                        { label: 'Mac', value: 'mac' },
                        { label: 'PCI', value: 'pci' },
                        { label: 'Slot', value: 'slot' },
                    ]}
                />
                <Select
                    label='Interface Type'
                    name='interfaceType'
                    onChange={formik.handleChange}
                    tooltip='The interface type. Can be one of en, wl, ww.'
                    value={formik.values.interfaceType}
                    options={[
                        { label: 'en', value: 'en' },
                        { label: 'wl', value: 'wl' },
                        { label: 'ww', value: 'ww' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
