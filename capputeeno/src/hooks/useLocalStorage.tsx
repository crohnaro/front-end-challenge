import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const isClient = typeof window !== 'undefined'; // Verifica se está no ambiente do navegador
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        if (!isClient) return; // Se não estiver no navegador, sai do efeito

        let storedValue = localStorage.getItem(item);
        if (storedValue) setValue(JSON.parse(storedValue));
    }, [isClient, item]); // Dependências: isClient e item

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        if (isClient) { // Se estiver no navegador, usa localStorage
            localStorage.setItem(item, JSON.stringify(newValue));
        }
    };

    return {
        value,
        updateLocalStorage
    };
}