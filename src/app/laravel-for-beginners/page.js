"use client";
import { useEffect, React } from 'react';
import { contents } from '@/app/laravel-for-beginners/contents.js';

export default function Page() {
    useEffect(() => {
        console.log("content", contents);
    }, []);

    return (
        <main className="flex max-h-screen flex-col items-center px-24 py-12">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Get started,&nbsp;
                    <code className="font-mono font-bold">Laravel for Beginners!</code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" Dawwas "}
                        {/* <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                        /> */}
                    </a>
                </div>
            </div>

            <content className="my-16 max-w-5xl w-full flex">
                <div className='w-1/4 as-sidebar'>
                    <div className='border border-transparent rounded-lg px-4 py-2 mb-8 mr-8 hover:bg-[#262626]'>
                        <div className='text-[20px] font-mono font-bold'>{"Laravel"}</div>
                        <div className='text-[12px] font-mono'>{"Building market web hooks"}</div>
                    </div>

                    {/* Mapping sidebar */}
                    <ul>
                        {contents.map((item, index) => (
                            <li key={index}>
                                <a href={item.path} className="font-mono text-sm">{item.title}</a>
                                {item.submenu && item.submenuItems.length > 0 && (
                                    <ul className="ml-4">
                                        {item.submenuItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a href={subItem.path} className="font-mono text-xs">{subItem.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='w-2/4 as-sidebar'>
                    <div className='text-[28px] font-mono font-bold'>{"Introduction"}</div>
                </div>

                <div className='w-1/4 as-sidebar'>
                    <div className='text-[15px] font-mono'>{"Link this page"}</div>
                </div>
            </content>
        </main>
    );
}
