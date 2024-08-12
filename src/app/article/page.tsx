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
							className="w-full object-cover"
							src="/images/dummy.png"
							alt="dummy"
							fill
						/>
					</div>
					<h2 className="text-2xl font-bold">記事のタイトル</h2>
					<div className="flex items-center gap-2">
						<span>Tag :</span>
						<Tag name="TypeScript" fontSize="md" iconSize="md" />
					</div>

					<span>2024/07/31</span>
					<ReadTimeTip time="5" fontSize="md" iconSize="md" />
				</header>
				<div>
					<p>
						お地蔵様が笠をもらったお礼に福を授ける 年も暮れようとする頃の話。
						雪深い山の中に住む夫婦は、正月を迎えるにも米一粒すら残っていなかった。そこで女房が作った髪飾りのかせ玉を町に売りに行くことにした。
						男が地蔵峠を通ると、お地蔵様の頭の上に雪が積もっていたので雪を払ってあげた。大晦日の夕方、町についた男はそこでかせ玉を売るが、一向に売れない。と、そこに笠売りのおじいさんがやってきた。笠売りのおじいさんもまったく笠が売れないので、二人はそれぞれの売り物を交換することにして家路についた。
						その途中、男がまた地蔵峠を通ると、お地蔵様は寒そうに佇んでいる。やさしい男はお地蔵様の頭に笠をかぶせてあげた。そして家に帰り、そのことを女房に話すと、それは良いことをしたと言い、女房も喜んだ。
						さて、その夜夫婦が寝ていると、外で物音がする。出てみるとそこには米・野菜・果物・着物などがたくさん置いてあった。二人の目には、遠くに峠のお地蔵様が帰って行くのが見えた。こうして二人は無事に正月を迎えることができた。
					</p>
				</div>
			</article>
		</div>
	);
};

export default page;
