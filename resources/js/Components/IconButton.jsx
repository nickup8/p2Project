export default function IconButton({ className = "", ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center p-2 bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 rounded-full active:outline-none active:ring-2 active:ring-inset active:ring-gray-700 ` +
                className
            }
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}
