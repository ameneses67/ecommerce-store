"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import { Color, Size } from "@/types";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";

import Filter from "./filter";

interface MobileFilterProps {
	sizes: Size[];
	colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className="lg:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button>
						Filtros
						<Plus className="h-4 w-4 ml-2" />
					</Button>
				</SheetTrigger>
				<SheetContent className="pt-16">
					<Filter
						valueKey="sizeId"
						name="Tamaño"
						data={sizes}
					/>
					<Filter
						valueKey="colorId"
						name="Color"
						data={colors}
					/>
				</SheetContent>
			</Sheet>
		</div>
	);
};
export default MobileFilter;
