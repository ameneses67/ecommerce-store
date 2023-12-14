"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { MainNavProps } from "@/components/main-nav";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const ResponsiveMenu: React.FC<MainNavProps> = ({ data }) => {
	const pathname = usePathname();

	const routes = data.map((route) => ({
		href: `/categoria/${route.id}`,
		label: route.name,
		active: pathname === `/categoria/${route.id}`,
	}));

	return (
		<div className="lg:hidden place-items-center grid">
			<Sheet>
				<SheetTrigger>
					<Menu className="h-8 w-8" />
				</SheetTrigger>
				<SheetContent side="right">
					<SheetHeader className="mt-16">
						<h3 className="text-2xl font-bold">Categorías</h3>
					</SheetHeader>
					<Separator className="mt-4 mb-8" />
					<SheetDescription>
						<nav className="flex flex-col items-center space-y-8">
							{routes.map((route) => (
								<Link
									key={route.href}
									href={route.href}
									className={cn(
										"text-2xl font-medium transition-colors hover:text-primary",
										route.active
											? "text-black dark:text-white"
											: "text-muted-foreground"
									)}
								>
									<SheetClose>{route.label}</SheetClose>
								</Link>
							))}
						</nav>
					</SheetDescription>
				</SheetContent>
			</Sheet>
		</div>
	);
};
export default ResponsiveMenu;
