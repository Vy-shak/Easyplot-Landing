const DottedBackground = () => {
    return (
        <div
            className="min-h-screen absolute z-0 w-full bg-white"
        >
            <div
                className="absolute inset-0  "
                style={{
                    backgroundImage: 'radial-gradient(#e0e0e0 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '2px 2px',
                }}
            />
        </div>
    );
};

export default DottedBackground;