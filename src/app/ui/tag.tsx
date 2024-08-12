import { DrawingPinIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const tagRecipe = tv({
	base: "flex items-center gap-1 border rounded-lg w-fit",
	variants: {
		fontSize: {
			sm: "text-xs py-1 pl-1 pr-2",
			md: "text-sm py-1 pl-1 pr-2",
		},
	},
	defaultVariants: {
		fontSize: "sm",
	},
});
const iconRecipe = tv({
	variants: {
		iconSize: {
			sm: "h-4 w-4 -mb-0.5",
			md: "h-5 w-5 -mb-1",
		},
	},
	defaultVariants: {
		iconSize: "sm",
	},
});

type TagVariants = VariantProps<typeof tagRecipe>;
type IconVariants = VariantProps<typeof iconRecipe>;

type Props = {
	name: string;
} & TagVariants &
	IconVariants;

const Tag: React.FC<Props> = ({ name, fontSize = "sm", iconSize = "sm" }) => {
	return (
		<Link href={"/"} className={tagRecipe({ fontSize })}>
			<DrawingPinIcon className={iconRecipe({ iconSize })} />
			<span>{name}</span>
		</Link>
	);
};

export default Tag;
