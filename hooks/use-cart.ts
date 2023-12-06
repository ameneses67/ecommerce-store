import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

import { Product } from "@/types";

interface CartStore {
	items: Product[];
	addItem: (data: Product) => void;
	removeItem: (id: string) => void;
	removeAll: () => void;
}

const useCart = create(
	persist<CartStore>(
		(set, get) => ({
			items: [],
			addItem: (data: Product) => {
				const currentItems = get().items;
				const existingItem = currentItems.find((item) => item.id === data.id);

				if (existingItem) {
					return toast.error("El artículo ya existe en tu carrito.");
				}

				set({ items: [...get().items, data] });
				toast.success("Artículo añadido al carrito.");
			},
			removeItem: (id: string) => {
				set({ items: [...get().items.filter((item) => item.id !== id)] });
				toast.success("Artículo eliminado del carrito.");
			},
			removeAll: () => {
				set({ items: [] });
				toast.success("Tu carrito está vacío.");
			},
		}),
		{ name: "cart-storage", storage: createJSONStorage(() => localStorage) }
	)
);

export default useCart;
