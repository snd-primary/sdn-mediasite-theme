import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { DrawingPinIcon, ClockIcon, ReaderIcon } from "@radix-ui/react-icons";
import Tag from "./tag";
import ReadTimeTip from "./readTimeTip";

export type BlogCardProps = {
	key: number;
	title: string;
	description: string;
	imgPath: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ ...props }) => {
	return (
		<li
			key={props.key}
			className=" w-full h-full grid grid-rows-subgrid row-span-4 gap-2 border rounded-sm overflow-hidden"
		>
			<Link href={"/"} className="relative w-full aspect-video tracking-wide">
				<Image
					className="object-cover"
					src={props.imgPath}
					alt="ブログ記事サムネイルのダミー画像"
					fill
				/>
				<span className="absolute left-1 bottom-1 text-xs bg-primary/40 text-background px-2 py-0.5">
					2024/07/30
				</span>
				<ReadTimeTip time="5" />
			</Link>
			<Link href={"/"} passHref>
				<h3 className=" leading-[1.5] h-[3.1em] overflow-hidden border-b mx-2 font-bold font-zenkakuGN">
					{props.title}
				</h3>
			</Link>
			<div className="px-2 pb-2 grid grid-cols-1 gap-2">
				<Tag name="TypeScript" />
				<p className="text-sm  leading-[1.7] h-[5.1em] overflow-hidden">
					{props.description}
				</p>
			</div>
		</li>
	);
};

export default BlogCard;
