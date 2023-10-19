export function PageTitle({ title }: { title: string }) {
    return (
        <h1
            className='mx-3 py-20 text-center text-5xl font-bold uppercase text-white sm:text-7xl'
            style={{
                WebkitTextStroke: '3px #000',
                textShadow: '4px 4px 0 rgba(0,0,0,0.5)',
            }}
        >
            {title}
        </h1>
    );
}
