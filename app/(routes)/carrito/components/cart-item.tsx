import Image from "next/image";
import { X } from "lucide-react";

import { Product } from "@/types";

import useCart from "@/hooks/use-cart";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";

interface CartItemProps {
	data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
	const cart = useCart();

	const onRemove = () => cart.removeItem(data.id);

	return (
		<li className="flex py-6 border-b">
			<div className="relative h-24 w-[4.5rem] rounded-md overflow-hidden sm:h-48 sm:w-36">
				<Image
					fill
					src={data.images[0].url}
					alt="Imagen producto"
					objectFit="cover"
				/>
			</div>
			<div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
				<div className="absolute z-10 right-0 top-0">
					<Button
						onClick={onRemove}
						size="icon"
						variant="outline"
						className="rounded-full shadow"
					>
						<X className="w-4 h-4" />
					</Button>
				</div>
				<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
					<div className="flex justify-between">
						<p className="text-lg font-semibold">{data.name}</p>
					</div>
					<div className="mt-1 flex text-sm">
						<p className="text-muted-background">{data.color.name}</p>
						<p className="text-muted-background ml-4 border-l pl-4">
							{data.size.value}
						</p>
					</div>
					<Currency value={data.price} />
				</div>
			</div>
		</li>
	);
};
export default CartItem;
