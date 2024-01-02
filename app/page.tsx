import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Carousel from "@/components/carousel/carousel";
import Hero from "@/components/landing-page-compos/hero";
import C2 from './../components/landing-page-compos/c2';
import C1 from './../components/landing-page-compos/c1';
import bg from "../public/bg.png"
import  Image  from 'next/image';
import Card1 from "@/components/landing-page-compos/card1";

export default function Home() {
	return (

		<>

		 
			<section className="flex  items-center  justify-around  flex-wrap lg:flex-nowrap   bg-[url('/bg.png')]    bg-cover rounded-md"> 
				
				{/* <Image
					src={bg}
					alt="bg"
					className="absolute w-full z-0"
					width={600}
					height={1000}
				/> */}

				{/* <div className="flex items-center justify-center"> */}
				<Carousel></Carousel>
					<Hero />
				{/* </div> */}
			</section>

			<section className="flex  items-center  justify-around  flex-wrap lg:flex-nowrap mt-8   rounded-md"> 
				<Card1 header="විශ්වාසනීය සේවය" iconpath="hshake.svg" body="දිගු කාලීන ව්‍යාපාරික අත්දැකීම් මත ගොඩනැගුනු විස්වාසය අපගේ ප්‍රධානම වත්කමයි"></Card1>
				<Card1 header="ස්ථීර ආදායමක්" iconpath="income.svg" body="නිති පතා ඔබ වෙත ලැබෙන ආදායම නිසා අවදානම අවම වීම"></Card1>
				<Card1 header="නිරවුල් කර්මාන්තයක්" iconpath="clear.svg" body="පරිසර හිතකාමී කර්මාන්තයක මුදල් ආයෝජනය මගින් ඔබ ලබන තෘප්තිය "></Card1>

			</section>
		</>
		
		// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
		// 	<div className="inline-block max-w-lg text-center justify-center">
		// 		<h1 className={title()}>Make&nbsp;</h1>
		// 		<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
		// 		<br />
		// 		<h1 className={title()}>
		// 			websites regardless of your design experience.
		// 		</h1>
		// 		<h2 className={subtitle({ class: "mt-4" })}>
		// 			Beautiful, fast and modern React UI library.
		// 		</h2>
		// 	</div>

		// 	<div className="flex gap-3">
		// 		<Link
		// 			isExternal
		// 			href={siteConfig.links.docs}
		// 			className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
		// 		>
		// 			Documentation
		// 		</Link>
		// 		<Link
		// 			isExternal
		// 			className={buttonStyles({ variant: "bordered", radius: "full" })}
		// 			href={siteConfig.links.github}
		// 		>
		// 			<GithubIcon size={20} />
		// 			GitHub
		// 		</Link>
		// 	</div>

		// 	<div className="mt-8">
		// 		<Snippet hideSymbol hideCopyButton variant="flat">
		// 			<span>
		// 				Get started by editing <Code color="primary">app/page.tsx</Code>
		// 			</span>
		// 		</Snippet>
		// 	</div>
		// </section>
	);
}
