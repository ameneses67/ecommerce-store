"use client";

import Image from "next/image";

import { Image as ImageType } from "@/types";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface GalleryProps {
	images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
	return (
		<Tabs
			defaultValue={images[0].id}
			className="flex flex-col gap-4"
		>
			{images.map((tab) => (
				<TabsContent
					key={tab.id}
					value={tab.id}
					className="relative aspect-[3/4]"
				>
					<Image
						src={tab.url}
						alt="Imagen producto"
						fill
						objectFit="cover"
						className="rounded-xl"
					/>
				</TabsContent>
			))}
			<TabsList className={cn("h-full p-2 max-w-fit space-x-4")}>
				{images.map((image) => (
					<TabsTrigger
						key={image.id}
						value={image.id}
						className="relative aspect-[3/4] w-12 sm:w-24"
					>
						<Image
							src={image.url}
							alt="Imagen producto"
							fill
							objectFit="cover"
							className="rounded"
						/>
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	);
};
export default Gallery;
