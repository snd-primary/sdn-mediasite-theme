import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { DrawingPinIcon, ClockIcon, ReaderIcon } from "@radix-ui/react-icons";
import Pagination from "./ui/pagination";
import Breadcrumb from "./ui/breadcrumb";

type blogPostsType = {
	key: number;
	title: string;
	description: string;
	imgPath: string;
};

const blogPosts: blogPostsType[] = [
	{
		key: 1,
		title: "Next.jsで始める最新のWeb開発",
		description:
			"Next.jsを使った最新のWeb開発手法について解説します。SSRとSSGの違い、そしてどのように使い分けるかを学びましょう。",
		imgPath: "/images/dummy.png",
	},
	{
		key: 2,
		title: "ReactのuseEffect完全ガイド",
		description:
			"Reactの重要なフックの一つ、useEffectの使い方を詳しく解説。依存配列の正しい使い方やクリーンアップ関数の重要性について学びます。",
		imgPath: "/images/dummy.png",
	},
	{
		key: 3,
		title: "TypeScriptで型安全なコーディング",
		description:
			"JavaScriptプロジェクトにTypeScriptを導入するメリットと、基本的な型付けの方法について解説します。",
		imgPath: "/images/dummy.png",
	},
	{
		key: 4,
		title: "モダンなCSSテクニック",
		description:
			"Flexbox、Grid、CSSカスタムプロパティなど、最新のCSSテクニックを使ってレイアウトとデザインを効率的に実装する方法を紹介します。",
		imgPath: "/images/dummy.png",
	},
	{
		key: 5,
		title:
			"WebパフォーマンスチューニングのコツTOP10 WebパフォーマンスチューニングのコツTOP10",
		description:
			"ローディング時間を削減し、ユーザー体験を向上させるための実践的なテクニックを10個ご紹介。簡単なものから高度なものまで幅広く解説します。",
		imgPath: "/images/dummy.png",
	},
];

const LinkCard: React.FC<blogPostsType> = ({ ...props }) => {
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
				<span className="flex items-center gap-1 absolute bottom-1 right-1 text-xs  bg-primary/40 text-background px-2 py-0.5 ">
					<ReaderIcon />
					5min read
				</span>
			</Link>
			<Link href={"/"}>
				<h3 className=" leading-[1.5] h-[3.1em] overflow-hidden border-b mx-2 font-bold font-zenkakuGN">
					{props.title}
				</h3>
			</Link>
			<div className="px-2">
				<Link
					href={"/"}
					className="flex items-center gap-1 border rounded-lg pt-0.5 pl-1 pr-2 w-fit"
				>
					<DrawingPinIcon />
					<span className=" text-sm ">TS</span>
				</Link>
			</div>
			<div className="px-2 pb-2">
				<p className="text-sm  leading-[1.7] h-[5.1em] overflow-hidden">
					{props.description}
				</p>
			</div>
		</li>
	);
};

export default function Home() {
	return (
		<main className="grid max-w-full w-full h-full md:px-2">
			<section className="grid grid-cols-1 gap-8 ">
				<div className="border-b py-3  rounded  w-full h-full flex items-center">
					<h2 className="text-3xl font-bold ">All Posts</h2>
				</div>
				<Breadcrumb />
				<ul className="w-full h-fit grid grid-cols-2  lg:grid-cols-3 gap-2">
					{blogPosts.map((post) => (
						<LinkCard
							key={post.key}
							title={post.title}
							description={post.description}
							imgPath={post.imgPath}
						/>
					))}
				</ul>

				<Pagination className="mt-12" />
			</section>
		</main>
	);
}
