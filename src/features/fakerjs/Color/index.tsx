'use client';

import { Cymk } from './Cymk';
import { ColorByCSSColorSpace } from './ColorByCSSColorSpace';
import { CSSSupportedFunction } from './CSSSupportedFunction';
import { CSSSupportedSpace } from './CSSSupportedSpace';
import { Hsl } from './Hsl';
import { Human } from './Human';
import { Hwb } from './Hwb';
import { Lab } from './Lab';
import { Lch } from './Lch';
import { Rgb } from './Rgb';
import { Space } from './Space';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function ColorPage() {
    const t = useDict().color;

    return (
        <>
            <PageTitle title={t.title} />

            <Cymk />
            <ColorByCSSColorSpace />
            <CSSSupportedFunction />
            <CSSSupportedSpace />
            <Hsl />
            <Human />
            <Hwb />
            <Lab />
            <Lch />
            <Rgb />
            <Space />
        </>
    );
}
