import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TerminalLayout from "@/Layouts/TerminalsLeyout";
import { Head } from "@inertiajs/react";
export default function ShowTerminal({ terminal }) {
    console.log(terminal);
    return (
        <>
            <Head title={`Терминал ${terminal.data.code}`} />
        </>
    );
}

ShowTerminal.layout = (page) => (
    <AuthenticatedLayout>
        <TerminalLayout header={`Терминал ${page.props.terminal.data.code}`}>
            {page}
        </TerminalLayout>
    </AuthenticatedLayout>
);
