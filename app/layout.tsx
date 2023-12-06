import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Saris",
	description: "Todo para la mujer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={font.className}>
				<ModalProvider />
				<ToastProvider />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
