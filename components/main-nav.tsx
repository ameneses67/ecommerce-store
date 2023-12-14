"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Category } from "@/types";

export interface MainNavProps {
	data: Category[];
	className?: string;
}

const MainNav: React.FC<MainNavProps> = ({ data, className }) => {
	const pathname = usePathname();

	const routes = data.map((route) => ({
		href: `/categoria/${route.id}`,
		label: route.name,
		active: pathname === `/categoria/${route.id}`,
	}));

	return (
		<nav className={cn("items-center space-x-6 hidden lg:flex", className)}>
			{routes.map((route) => (
				<Link
					key={route.href}
					href={route.href}
					className={cn(
						"text-lg font-medium transition-colors hover:text-primary",
						route.active
							? "text-black dark:text-white"
							: "text-muted-foreground"
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	);
};
export default MainNav;
