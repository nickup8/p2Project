import IconButton from "@/Components/IconButton";
import { Link } from "@inertiajs/react";
import { MdAdd, MdOutlineSearch } from "react-icons/md";

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
                            <IconButton children={<MdAdd size={20} />} />
                        </Link>

                        <IconButton children={<MdOutlineSearch size={20} />} />

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
