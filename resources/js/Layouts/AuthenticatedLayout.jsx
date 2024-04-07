import Header from "@/Components/Header";

export default function AuthenticatedLayout({ user, header, children }) {
    return (
        <>
            <Header />
            <div className="min-h-screen h-full bg-gray-100 pt-16">
                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </>
    );
}
