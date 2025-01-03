

interface menubutton {
    text: string;
}

const MenuButton = ({ text }: menubutton) => {
    return (
        <button
            className="gap-2.5 font-Montserrat font-semibold self-stretch px-2.5 py-3 text-xs  whitespace-nowrap rounded border border-solid bg-neutral-50 border-stroke-500 text-neutral-800"
        >
            {text}
        </button>
    );
}

export default MenuButton