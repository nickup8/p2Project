import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TerminalLayout from "@/Layouts/TerminalsLeyout";
import { Head } from "@inertiajs/react";

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
                                    <td className="border-x border-gray-400 p-3 "></td>
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
