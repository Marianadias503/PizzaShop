// ThemeToggle.js ou ThemeToggle.tsx
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do menu

  const toggleMenu = () => setIsOpen((prev) => !prev); // Função para alternar o menu

  return (
    <div className="relative">
      <Button variant="outline" size="icon" onClick={toggleMenu}>
        <Sun className="h-[1.2rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      
      {/* Menu de opções */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10">
          <button
            onClick={() => {
              setTheme('light');
              setIsOpen(false); // Fechar o menu após a seleção
            }}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Light
          </button>
          <button
            onClick={() => {
              setTheme('dark');
              setIsOpen(false); // Fechar o menu após a seleção
            }}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Dark
          </button>
          <button
            onClick={() => {
              setTheme('system');
              setIsOpen(false); // Fechar o menu após a seleção
            }}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            System
          </button>
        </div>
      )}
    </div>
  );
}
