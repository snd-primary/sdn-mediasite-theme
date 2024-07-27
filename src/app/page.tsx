import type React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
	{
		id: 1,
		title: "Next.jsで始める最新のWeb開発",
		description:
			"Next.jsを使った最新のWeb開発手法について解説します。SSRとSSGの違い、そしてどのように使い分けるかを学びましょう。",
		imgPath: "/images/dummy.png",
	},
	{
		id: 2,
		title: "ReactのuseEffect完全ガイド",
		description:
			"Reactの重要なフックの一つ、useEffectの使い方を詳しく解説。依存配列の正しい使い方やクリーンアップ関数の重要性について学びます。",
		imgPath: "/images/dummy.png",
	},
	{
		id: 3,
		title: "TypeScriptで型安全なコーディング",
		description:
			"JavaScriptプロジェクトにTypeScriptを導入するメリットと、基本的な型付けの方法について解説します。",
		imgPath: "/images/dummy.png",
	},
	{
		id: 4,
		title: "モダンなCSSテクニック",
		description:
			"Flexbox、Grid、CSSカスタムプロパティなど、最新のCSSテクニックを使ってレイアウトとデザインを効率的に実装する方法を紹介します。",
		imgPath: "/images/dummy.png",
	},
	{
		id: 5,
		title: "WebパフォーマンスチューニングのコツTOP10",
		description:
			"ローディング時間を削減し、ユーザー体験を向上させるための実践的なテクニックを10個ご紹介。簡単なものから高度なものまで幅広く解説します。",
		imgPath: "/images/dummy.png",
	},
];

const LinkCard: React.FC = () => {
	return (
		<Link href="/" passHref>
			<Card className="grid grid-cols-1 px-2 py-2 gap-2 border rounded-sm ">
				<div className="relative w-full aspect-video">
					<Image
						className="object-cover"
						src="/images/dummy.png"
						alt="ブログ記事サムネイルのダミー画像"
						fill
					/>
				</div>

				<CardHeader>
					<CardTitle>THIS IS POST LINKCARD.</CardTitle>
				</CardHeader>
			</Card>
		</Link>
	);
};

export default function Home() {
	return (
		<main className="grid max-w-full w-full h-full border">
			<section className="grid grid-cols-2 gap-2 align-top   ">
				<LinkCard />
				<LinkCard />
				<LinkCard />
				<LinkCard />
				<LinkCard />
			</section>
		</main>
	);
}
