import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { NavLink } from "./nav-link";

export function Header() {
    return (
        <div className="border-b fixed top-0 left-0 w-full bg-white shadow-md">

            <div className="flex h-16 items-center gap-6 px-6">
                <Pizza className="h-6 w-6" />
              
                <nav className="flex items-center space-x-4 lg:space-x-6">

                    <NavLink to="/" className="flex items-center space-x-1">
                        <Home className="h-4 w-4" />
                        <span>Inicio</span>
                    </NavLink>

                    <NavLink to="/orders" className="flex items-center space-x-1">
                        <UtensilsCrossed className="h-4 w-4" />
                        <span>Pedidos</span>
                    </NavLink>

                </nav>
            </div>
        </div>
    );
}
