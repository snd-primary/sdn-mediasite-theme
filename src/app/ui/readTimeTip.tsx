import { ReaderIcon } from "@radix-ui/react-icons";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const tipBaseRecipe = tv({
	base: "flex items-center gap-1",
	variants: {
		fontSize: {
			sm: "text-xs py-1 pl-1 pr-2 absolute bottom-1 right-1 bg-primary/40 text-background px-2 py-0.5",
			md: "text-sm py-1 pl-1 pr-2 text-primary bg-background w-fit ",
		},
	},
	defaultVariants: {
		fontSize: "sm",
	},
});

const tipIconRecipe = tv({
	variants: {
		iconSize: {
			sm: "h-4 w-4",
			md: "h-5 w-5",
		},
	},
	defaultVariants: {
		iconSize: "sm",
	},
});

type TipBaseVariants = VariantProps<typeof tipBaseRecipe>;
type TipIconVariants = VariantProps<typeof tipIconRecipe>;

type Props = {
	time: string;
} & TipBaseVariants &
	TipIconVariants;

const ReadTimeTip: React.FC<Props> = ({
	time,
	fontSize = "sm",
	iconSize = "sm",
}) => {
	return (
		<span className={tipBaseRecipe({ fontSize })}>
			<ReaderIcon className={tipIconRecipe({ iconSize })} />
			{time}min read.
		</span>
	);
};

export default ReadTimeTip;
