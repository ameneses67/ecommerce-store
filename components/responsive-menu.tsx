import { Menu } from "lucide-react";

import MainNav, { MainNavProps } from "@/components/main-nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const ResponsiveMenu: React.FC<MainNavProps> = ({ data }) => {
	return (
		<div className="lg:hidden place-items-center grid">
			<Sheet>
				<SheetTrigger>
					<Menu className="h-8 w-8" />
				</SheetTrigger>
				<SheetContent side="right">
					<MainNav
						data={data}
						className="flex flex-col space-y-8 pt-12 space-x-0 mx-0"
					/>
				</SheetContent>
			</Sheet>
		</div>
	);
};
export default ResponsiveMenu;
