import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="mt-4 text-right">
            {links.map((link) => (
                <Link
                    preserveScroll
                    href={link.url || " "}
                    key={link.label}
                    className={
                        "inline-block py-2 px-3 leading-tight " +
                        (link.active
                            ? " bg-red-500 py-1 px-2 mx-1 text-white hover:bg-red-500"
                            : " ") +
                        (!link.url
                            ? "!text-gray-900 "
                            : "hover:bg-gray-800 hover:text-white")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}
