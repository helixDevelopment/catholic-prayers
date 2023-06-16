import { type NextPage } from "next";
import Head from "next/head";

import { useState, useEffect } from "react";

import { Icon } from "@iconify/react";

import allPrayers from "~/prayers";
import { type Prayer } from "~/consts";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
    const [language, setLanguage] = useState("en");
    const [prayers, setPrayers] = useState<Prayer[]>([]);

    useEffect(() => {
        const localised = allPrayers.prayers.en;

        setPrayers(localised as Prayer[]);
    }, [language]);

    return (
        <div className="">
            <Head>
                <title>My Catholic Prayers</title>
                <meta name="description" content="app description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen h-[100vh] flex-col items-center max-w-[75rem] mx-auto">
                <Navbar />
                <div className="flex flex-col flex-1 w-full p-4 md:px-10 lg:px-20 text-center">
                    <div className="w-full text-left">
                        <div className="w-full flex flex-row">
                            <p className="text-3xl text-bold inline">Common Prayers</p>
                            <select id="language" className="ml-auto mr-2">
                                <option>English</option>
                            </select>
                            <select id="rite" className="">
                                <option>Roman Catholic</option>
                                <option>Syro Malabar</option>
                            </select>
                        </div>

                        <div>
                            {
                                prayers.map((prayer, i) => {
                                    return <div key={i} className="relative my-4">
                                        <div className="w-full flex justify-between">
                                            <p className="text-2xl font-bold z-10">{prayer.name}</p>
                                            <div className="absolute p-2 space-x-2 flex flex-row justify-end w-full text-xl h-full opacity-0 hover:opacity-100 transition-all z-0">
                                                <Icon icon="mdi:content-copy" className="hover:cursor-pointer" />
                                                <Icon icon="mdi:printer" className="hover:cursor-pointer" />
                                                <Icon icon="mdi:share-variant-outline" className="hover:cursor-pointer" />

                                            </div>
                                        </div>
                                        {prayer.content.map((line, li) => <p className="z-10" key={li}>{line}</p>)}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
