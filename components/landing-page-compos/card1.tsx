 
 
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
 

import { Noto_Sans_Sinhala } from 'next/font/google'

const noto = Noto_Sans_Sinhala({
    weight: ['400',],
    subsets: ["sinhala"],
    display: 'swap',
})

export default function Card1({ header, iconpath, body }: { header: string, iconpath: string, body:string }) {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src= {"/" +iconpath}
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-2xl text-purple-800 dark:text-white  font-bold">{header}</p>
                    <p className="text-small text-default-500 dark:text-white">Aga Wasi Enterprises</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className={`${noto.className} text-xl text-purple-800 dark:text-white`}>{body}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href="/vision"
                >
                   වැඩි විස්තර...
                </Link>
            </CardFooter>
        </Card>
    );
}
