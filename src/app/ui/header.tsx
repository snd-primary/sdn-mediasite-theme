import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<header className="w-full bg-secondary px-8 py-2 h-20 flex items-center justify-between ">
			<Link
				href="/"
				className="flex py-2 px-2 text-center bg-card-foreground text-background"
			>
				LogoImage Here
			</Link>
			<nav>
				<ul className="flex items-center justify-center gap-4">
					<li>
						<Link href="/">menu1</Link>
					</li>
					<li>
						<Link href="/">menu2</Link>
					</li>
					<li>
						<Link href="/">menu3</Link>
					</li>
					<li>
						<Link href="/">menu4</Link>
					</li>
					<li>
						<Link href="/">menu5</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
