import IconButton from "@/Components/IconButton";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TerminalLayout from "@/Layouts/TerminalsLeyout";
import { Head, Link } from "@inertiajs/react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function Terminals({ terminals }) {
    console.log(terminals);
    return (
        <>
            <Head title="Терминалы" />
            {terminals.data.length ? (
                <>
                    <table className="w-full text-sm text-left rtl:text-right text-nowrap border-b border-gray-400">
                        <thead className="bg-gray-700 text-white">
                            <tr className="text-nowrap">
                                <th className="border-x p-3 border-white">
                                    Код контакта
                                </th>
                                <th className="border-x p-3 border-white">
                                    Номер
                                </th>
                                <th className="border-x p-3 border-white">
                                    Поставщик
                                </th>
                                <th className="border-x p-3 border-white">
                                    Название
                                </th>
                                <th className="border-x p-3 border-white">
                                    Дата создания
                                </th>
                                <th className="border-x p-3 border-white">
                                    Дата обновления
                                </th>
                                <th className="border-x p-3 border-white text-center">
                                    Действия
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {terminals.data.map((terminal) => (
                                <tr
                                    key={terminal.code}
                                    className="even:bg-gray-200"
                                >
                                    <td className="border-x border-gray-400 p-3 ">
                                        {terminal.code}
                                    </td>
                                    <td className="border-x border-gray-400 p-3 ">
                                        {terminal.number}
                                    </td>
                                    <td className="border-x border-gray-400 p-3 ">
                                        {terminal.supplier}
                                    </td>
                                    <td className="border-x border-gray-400 p-3 ">
                                        {terminal.title}
                                    </td>
                                    <td className="border-x border-gray-400 p-3 ">
                                        {terminal.created_at}
                                    </td>
                                    <td className="border-x border-gray-400 p-3 ">
                                        {terminal.updated_at}
                                    </td>
                                    <td className="border-x border-gray-400 p-2 ">
                                        <div className="flex space-x-4 w-full justify-center">
                                            {/* <Link
                                                href={route(
                                                    "terminals.show",
                                                    terminal.id
                                                )}
                                            >
                                                <IconButton>
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
                                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                        />
                                                    </svg>
                                                </IconButton>
                                            </Link> */}
                                            <Link
                                                href={route(
                                                    "terminals.edit",
                                                    terminal.id
                                                )}
                                            >
                                                <IconButton>
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
                                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </IconButton>
                                            </Link>
                                            <IconButton>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6 hover:text-red-600"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                    />
                                                </svg>
                                            </IconButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination links={terminals.meta.links} />
                </>
            ) : (
                <h3>Терминалы отсутствуют</h3>
            )}
        </>
    );
}

Terminals.layout = (page, auth) => (
    <AuthenticatedLayout>
        <TerminalLayout header="Терминалы">{page}</TerminalLayout>
    </AuthenticatedLayout>
);
