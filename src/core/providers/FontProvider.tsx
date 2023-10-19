import { poppins } from '@core/fonts';

const fonts = [poppins];

export function FontProvider({ children }: { children: React.ReactNode }) {
    // Add all the font variables to the body so they can be used in the CSS, like:
    // font-family: var(--font-variable);
    let classNames = fonts.map((font) => font.variable).join(' ');

    // Set the default font.
    classNames += ` ${poppins.className}`;

    return <div className={classNames}>{children}</div>;
}
