import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

import useCart from "@/hooks/use-cart";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";

const Summary = () => {
	const searchParams = useSearchParams();
	const items = useCart((state) => state.items);
	const removeAll = useCart((state) => state.removeAll);

	useEffect(() => {
		if (searchParams.get("success")) {
			toast.success("Pago completado.");
			removeAll();
		}

		if (searchParams.get("canceled")) {
			toast.error("Algo salió mal. Intenta pagar de nuevo.");
		}
	}, [removeAll, searchParams]);

	const totalPrice = items.reduce((total, item) => {
		return total + Number(item.price);
	}, 0);

	const onCheckout = async () => {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/pago`,
			{
				productIds: items.map((item) => item.id),
			}
		);

		window.location = response.data.url;
	};

	return (
		<div className="lg:col-span-5">
			<div className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:mt-0 lg:p-8 bg-secondary sticky top-6">
				<h2 className="text-lg font-medium">Resumen del Pedido</h2>
				<div className="mt-6 space-y-4">
					<div className="flex items-center justify-between border-t border-muted-foreground pt-4">
						<div className="text-base font-medium">Total del pedido</div>
						<Currency value={totalPrice} />
					</div>
				</div>
				<Button
					disabled={items.length === 0}
					onClick={onCheckout}
					className="w-full rounded-full mt-6"
				>
					Pagar
				</Button>
			</div>
		</div>
	);
};
export default Summary;
