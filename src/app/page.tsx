import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { DrawingPinIcon } from "@radix-ui/react-icons";

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
		title: "WebパフォーマンスチューニングのコツTOP10",
		description:
			"ローディング時間を削減し、ユーザー体験を向上させるための実践的なテクニックを10個ご紹介。簡単なものから高度なものまで幅広く解説します。",
		imgPath: "/images/dummy.png",
	},
];

const LinkCard: React.FC<blogPostsType> = ({ ...props }) => {
	return (
		<li
			key={props.key}
			className="grid grid-rows-subgrid row-span-4  gap-2 border rounded-sm overflow-hidden "
		>
			<Link href={"/"} className="relative w-full aspect-video ">
				<Image
					className="object-cover"
					src={props.imgPath}
					alt="ブログ記事サムネイルのダミー画像"
					fill
				/>
				<span className="absolute left-2 top-2 text-xs font-bold bg-primary/80 text-background px-2 py-0.5">
					2024/07/30
				</span>
			</Link>
			<Link href={"/"}>
				<h3 className="text-base px-2">{props.title}</h3>
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
				<p className="text-sm  leading-[1.5] h-[4.5em] overflow-hidden">
					{props.description}
				</p>
			</div>
		</li>
	);
};

export default function Home() {
	return (
		<main className="grid max-w-full w-full h-full border">
			<section className=" p-2">
				<ul className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-2 align-top">
					{blogPosts.map((post) => (
						<LinkCard
							key={post.key}
							title={post.title}
							description={post.description}
							imgPath={post.imgPath}
						/>
					))}
				</ul>
			</section>
		</main>
	);
}
