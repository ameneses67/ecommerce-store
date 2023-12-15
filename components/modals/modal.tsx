"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Dialog
			open={open}
			onOpenChange={onChange}
		>
			<DialogContent>
				<div>{children}</div>
			</DialogContent>
		</Dialog>
	);
};
