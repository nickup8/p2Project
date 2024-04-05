import { useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import TextInput from "../TextInput";
import InputError from "../InputError";

export default function FormTerminal({ terminal, disabled }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        code: "",
        number: "",
        supplier: "",
        title: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("terminals.store"));
    };
    return (
        <form noValidate className="flex space-y-4 flex-col" onSubmit={submit}>
            <div className="w-full flex space-x-4">
                <div className="w-full">
                    <InputLabel htmlFor="code" value="Код контакта (YPN)" />
                    <TextInput
                        className="w-full mt-2"
                        id="code"
                        type="text"
                        name="code"
                        required
                        autoFocus
                        value={data.code}
                        onChange={(e) => setData("code", e.target.value)}
                        disabled={disabled}
                    />
                    <InputError message={errors.code} className="mt-2" />
                </div>
                <div className="w-full">
                    <InputLabel htmlFor="number" value="Номер контакта (SPN)" />
                    <TextInput
                        className="w-full mt-2"
                        id="number"
                        type="text"
                        name="number"
                        required
                        value={data.number}
                        onChange={(e) => setData("number", e.target.value)}
                        disabled={disabled}
                    />
                    <InputError message={errors.number} className="mt-2" />
                </div>
                <div className="w-full">
                    <InputLabel htmlFor="supplier" value="Поставщик" />
                    <TextInput
                        className="w-full mt-2"
                        id="supplier"
                        type="text"
                        name="supplier"
                        required
                        value={data.supplier}
                        onChange={(e) => setData("supplier", e.target.value)}
                        disabled={disabled}
                    />
                    <InputError message={errors.supplier} className="mt-2" />
                </div>
            </div>
            <div className="w-full">
                <InputLabel htmlFor="title" value="Описание" />
                <TextInput
                    className="w-full mt-2"
                    id="title"
                    type="text"
                    name="title"
                    required
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    disabled={disabled}
                />
                <InputError message={errors.title} className="mt-2" />
            </div>
            {!disabled && (
                <div className="flex space-x-2">
                    <PrimaryButton>Сохранить</PrimaryButton>
                    <SecondaryButton>Отмена</SecondaryButton>
                </div>
            )}
        </form>
    );
}
