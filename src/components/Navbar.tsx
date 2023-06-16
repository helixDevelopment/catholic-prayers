import { type NextPage } from "next";
import Link from "next/link";


const Navbar: NextPage = () => {

	interface ItemProps {
		label: string,
		url: string
	}

	const navbar: ItemProps[] = [
		{ label: "Explore", url: "https://google.com" },
		{ label: "About", url: "https://google.com" },
		{ label: "Contact", url: "https://google.com" }

	]

	const NavItem = ({ label, url }: ItemProps) => {
		return (<Link className="z-50 p-2 text-sm md:text-lg mx-2" href={url} >{label}</Link>)
	}

	return (<div className="relative w-full z-50">
		<div className="h-[3.5rem] md:h-[5rem]"></div>
		<div className="flex items-center justify-between w-full fixed top-0 max-h-[20rem] p-2 lg:p-4 max-w-[75rem] border-b-[1px] backdrop-filter backdrop-blur-lg bg-opacity-30">
			<Link className="flex flex-row mx-4" href="\" >
				<div className="mr-2">🙏</div>
				<div className="hidden md:block">My Catholic Prayers</div>
			</Link>

			<div className="flex-row flex">
				{
					navbar.map((item, index) =>
						<NavItem label={item.label} url={item.url} key={index} />
					)
				}
				{/* <Image className="top-4 sm:top-0 lg:h-[10rem]" src="/tpc-1.svg" alt="Aristo" width={100} height={100}  />*/}
			</div>
		</div>
	</div>);
}

export default Navbar;