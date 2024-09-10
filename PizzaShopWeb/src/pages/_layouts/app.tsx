import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col antialiased">
            <Header />
            <div className="flex flex-1 p-8 pt-20 ">
                <main className="flex flex-col gap-4  ">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
