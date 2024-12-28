const DottedBackground = () => {
    return (
        <div
            className="h-full absolute box-border z-0 w-full bg-white"
        >
            <div
                className="absolute inset-0  "
                style={{
                    backgroundImage: 'radial-gradient(#B5B5B5 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '2px 2px',
                }}
            />
        </div>
    );
};

export default DottedBackground;