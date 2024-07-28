import type React from "react";
import Pagination from "./ui/pagination";
import Breadcrumb from "./ui/breadcrumb";
import { blogCardData } from "./lib/data";
import BlogCard from "./ui/blogCard";

export default function Home() {
	return (
		<main className="@container/main grid max-w-full w-full h-full md:px-2">
			<section className="grid grid-cols-1 gap-8 ">
				<div className="border-b py-3  rounded  w-full h-full flex items-center">
					<h2 className="text-3xl font-bold ">All Posts</h2>
				</div>
				<Breadcrumb />
				<ul className="w-full h-fit grid grid-cols-2 @2xl/main:grid-cols-3 gap-4">
					{blogCardData.map((post) => (
						<BlogCard
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
