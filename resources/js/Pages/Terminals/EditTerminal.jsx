import FormTerminal from "@/Components/Terminals/FormTerminal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TerminalLayout from "@/Layouts/TerminalsLeyout";
import { Head } from "@inertiajs/react";
export default function ShowTerminal({ terminal }) {
    return (
        <>
            <Head title="Терминал" />
            <FormTerminal terminal={terminal.data} />
        </>
    );
}

ShowTerminal.layout = (page) => (
    <AuthenticatedLayout>
        <TerminalLayout
            header={`Редактирование терминала ${page.props.terminal.data.code}`}
        >
            {page}
        </TerminalLayout>
    </AuthenticatedLayout>
);
