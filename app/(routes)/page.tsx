import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboard("55e93555-c707-431f-9538-613fd9ef426e");
	const products = await getProducts({ isFeatured: true });

	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList
						title="Productos Destacados"
						items={products}
					/>
				</div>
			</div>
		</Container>
	);
};
export default HomePage;
