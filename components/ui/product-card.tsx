"use client";

import { MouseEventHandler, useState } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Product } from "@/types";

import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
	data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
	const previewModal = usePreviewModal();
	const router = useRouter();
	const cart = useCart();

	const handleClick = () => {
		router.push(`/producto/${data.id}`);
	};

	const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();

		previewModal.onOpen(data);
	};

	const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();

		cart.addItem(data);
	};

	return (
		<Card
			onClick={handleClick}
			className="group cursor-pointer"
		>
			<div className="p-4 relative">
				<AspectRatio
					ratio={3 / 4}
					className="bg-muted"
				>
					<Image
						src={data.images[0].url}
						alt={data.name}
						fill
						objectFit="cover"
						className="rounded-md"
					/>
				</AspectRatio>
				<div className="opacity-0 group-hover:opacity-100 transition absolute inset-x-0 bottom-8">
					<div className="flex gap-x-6 justify-center">
						<Button
							onClick={onPreview}
							variant="outline"
							size="icon"
							className="rounded-full"
						>
							<Expand className="h-6 w-6" />
						</Button>
						<Button
							onClick={onAddToCart}
							variant="outline"
							size="icon"
							className="rounded-full"
						>
							<ShoppingCart className="h-6 w-6" />
						</Button>
					</div>
				</div>
			</div>
			<CardHeader className="text-lg font-semibold">
				{data.name}
				<Badge className="max-w-fit">{data.category.name}</Badge>
			</CardHeader>
			<CardContent>
				<Currency value={data.price} />
			</CardContent>
		</Card>
	);
};
export default ProductCard;
