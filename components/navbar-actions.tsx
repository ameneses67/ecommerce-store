"use client";

import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import useCart from "@/hooks/use-cart";

import { Button } from "@/components/ui/button";

const NavbarActions = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const router = useRouter();
	const cart = useCart();

	if (!isMounted) {
		return null;
	}

	return (
		<div className="ml-auto mr-6 lg:ml-0 lg:mr-0 flex items-center gap-x-4">
			<Button
				onClick={() => router.push("/carrito")}
				className="rounded-full"
			>
				<ShoppingCart className="mr-2 h-4 w-4" /> {cart.items.length}
			</Button>
		</div>
	);
};
export default NavbarActions;
