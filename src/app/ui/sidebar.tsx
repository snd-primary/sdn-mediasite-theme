"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
	GitHubLogoIcon,
	DiscordLogoIcon,
	InstagramLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { tv } from "tailwind-variants";
import Link from "next/link";

const iconSize = tv({
	variants: {
		size: {
			small: "w-8 h-8",
		},
	},
	defaultVariants: {
		size: "small",
	},
});

const SidebarTitle = ({ title }: { title: string }) => {
	return (
		<h3 className="text-lg font-bold border rounded px-4 py-1 w-fit mx-auto">
			{title}
		</h3>
	);
};

const AuthorBio = () => {
	return (
		<div className="grid grid-cols-1 justify-center justify-items-center w-full h-fit gap-4 py-4 ">
			<div className="relative w-24 h-24 rounded border">
				<Image src={"/images/dummy.png"} alt="author image" fill />
			</div>
			<span className="text-lg font-bold ">SND</span>
			<div className=" flex align-center gap-4">
				<GitHubLogoIcon className={iconSize()} />
				<DiscordLogoIcon className={iconSize()} />
				<InstagramLogoIcon className={iconSize()} />
			</div>
			<p className="text-left px-2 ">
				Server Components allow you to move data fetching to the server, closer to
				your data source. This can improve performance by reducing time it takes to
			</p>
			<Link
				href={"/"}
				passHref
				role="button"
				className="underline underline-offset-2 hover:opacity-70"
			>
				read more
			</Link>
		</div>
	);
};

export function CalendarDemo() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return (
		<div className="grid grid-cols-1 h-fit justify-center text-center py-2  ">
			{/* <SidebarTitle title="Archive" /> */}
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-md  shadow w-full"
			/>
		</div>
	);
}

/* const CategoryLinks = () => {
	return <div></div>;
}; */

const Sidebar = () => {
	return (
		<aside className="mt-16 border rounded w-full h-fit align-start grid grid-cols-subgrid gap-4 col-span-1 divide-y-2 divide-solid">
			<AuthorBio />
			<CalendarDemo />
		</aside>
	);
};

export default Sidebar;
