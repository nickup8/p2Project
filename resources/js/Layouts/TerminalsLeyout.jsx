import IconButton from "@/Components/IconButton";
import { Link } from "@inertiajs/react";
import { MdAdd, MdOutlineSearch } from "react-icons/md";
// import { PlusCi } from "@heroicons/react/outline";

export default function TerminalLayout({ children, header }) {
    return (
        <>
            <header className="bg-white shadow px-6">
                <div className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {header}
                    </h2>
                    <div className="flex items-center space-x-2">
                        <Link href={route("terminals.create")}>
                            <IconButton
                                children={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                }
                            />
                        </Link>

                        <IconButton
                            children={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            }
                        />

                        {/* <Link>
                            <IconButton
                                children={
                                    <MdOutlineCollectionsBookmark size={20} />
                                }
                            />
                        </Link> */}
                    </div>
                </div>
            </header>
            <div className="py-12">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
