import React from "react";
import { HomeIcon } from "@radix-ui/react-icons";
import {
	BreadcrumbRoot,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Breadcrumb = () => {
	return (
		<BreadcrumbRoot>
			<BreadcrumbList>
				<BreadcrumbItem>
					{/* 後でNextLinkに書き換える */}
					<BreadcrumbLink href="/" className="flex items-center gap-1">
						<HomeIcon />
						<span className="-mb-0.5">Home</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/components">Components</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</BreadcrumbRoot>
	);
};

export default Breadcrumb;
