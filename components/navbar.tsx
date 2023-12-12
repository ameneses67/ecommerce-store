import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import ResponsiveMenu from "./responsive-menu";

const Navbar = async () => {
	const categories = await getCategories();

	return (
		<div className="border-b">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
					<Link
						href="/"
						className="gap-x-2"
					>
						<p className="font-bold text-xl">SARIS</p>
					</Link>
					<MainNav data={categories} />
					<NavbarActions />
					<ResponsiveMenu data={categories} />
				</div>
			</Container>
		</div>
	);
};
export default Navbar;
