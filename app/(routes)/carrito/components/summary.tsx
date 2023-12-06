import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

import useCart from "@/hooks/use-cart";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import toast from "react-hot-toast";

const Summary = () => {
	const searchParams = useSearchParams();
	const items = useCart((state) => state.items);
	const removeAll = useCart((state) => state.removeAll);

	useEffect(() => {
		if (searchParams.get("success")) {
			toast.success("Pago completado.");
			removeAll;
		}

		if (searchParams.get("cancelled")) {
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
		<div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
			<h2 className="text-lg font-medium text-gray-900">Resumen del Pedido</h2>
			<div className="mt-6 space-y-4">
				<div className="flex items-center justify-between border-t border-gray-200 pt-4">
					<div className="text-base font-medium text-gray-900">
						Total del pedido
					</div>
					<Currency value={totalPrice} />
				</div>
			</div>
			<Button
				onClick={onCheckout}
				className="w-full mt-6"
			>
				Pagar
			</Button>
		</div>
	);
};
export default Summary;
