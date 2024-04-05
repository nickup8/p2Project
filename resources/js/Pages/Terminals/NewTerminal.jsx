import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import FormTerminal from "@/Components/Terminals/FormTerminal";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TerminalLayout from "@/Layouts/TerminalsLeyout";
import { Head, useForm } from "@inertiajs/react";

export default function NewTerminal() {
    return (
        <>
            <Head title="Новый терминал" />
            <FormTerminal />
        </>
    );
}

NewTerminal.layout = (page) => (
    <AuthenticatedLayout>
        <TerminalLayout header="Новый терминал">{page}</TerminalLayout>
    </AuthenticatedLayout>
);
