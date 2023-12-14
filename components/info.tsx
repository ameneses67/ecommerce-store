"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";

import useCart from "@/hooks/use-cart";

import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/button";

interface InfoProps {
	data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
	const cart = useCart();

	const onAddToCart = () => {
		cart.addItem(data);
	};

	return (
		<div>
			<h1 className="text-3xl font-bold">{data.name}</h1>
			<div className="mt-3 flex items-end justify-between">
				<p className="text-2xl">
					<Currency value={data.price} />
				</p>
			</div>
			<hr className="my-4" />
			<div className="flex flex-col gap-y-6">
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold">Tamaño:</h3>
					<div>{data.size.name}</div>
					<div>({data.size.value})</div>
				</div>
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold">Color:</h3>
					<div>{data.color.name}</div>
					<div
						className="h-6 w-6 rounded-full border"
						style={{ backgroundColor: data.color.value }}
					/>
				</div>
			</div>
			<div className="mt-10 flex items-center gap-x-3">
				<Button onClick={onAddToCart}>
					Añadir al carrito
					<ShoppingCart className="ml-2 h4 w-4" />
				</Button>
			</div>
		</div>
	);
};
export default Info;
