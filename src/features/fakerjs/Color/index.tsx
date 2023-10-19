import { PageTitle } from '@/core/components/FakerSection';

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

export function ColorPage() {
    return (
        <>
            <PageTitle title='Color 🎨' />

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
