import Image from "next/image";

import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
	data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
	return (
		<div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
			<div className="rounded-xl relative aspect-square sm:aspect-[2.4/1] overflow-hidden">
				<Image
					src={data.imageUrl}
					alt="Imagen de la cartelera"
					fill
					objectFit="cover"
					className="z-0"
				/>
				<div className="inset-0 flex flex-col justify-center items-center text-center gap-y-8 bg-black/50 z-10 absolute">
					<div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-background dark:text-foreground">
						{data.label}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Billboard;
