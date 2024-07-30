import React from "react";
import Breadcrumb from "../ui/breadcrumb";
import Image from "next/image";
import Tag from "../ui/tag";
import ReadTimeTip from "../ui/readTimeTip";

const page = () => {
	return (
		<div className="grid grid-cols-1 h-fit w-full">
			<Breadcrumb />
			<article className="w-full h-fit grid grid-cols-1">
				<header className="grid grid-cols-1">
					<div className="w-full aspect-video relative">
						<Image
							className="w-full  object-cover"
							src="/images/dummy.png"
							alt="dummy"
							fill
						/>
					</div>
					<h2 className="text-2xl font-bold">記事のタイトル</h2>
					<span>2024/07/31</span>
					<Tag name="TypeScript" fontSize="md" iconSize="md" />
					<ReadTimeTip time="5" fontSize="md" iconSize="md" />
				</header>
			</article>
		</div>
	);
};

export default page;
