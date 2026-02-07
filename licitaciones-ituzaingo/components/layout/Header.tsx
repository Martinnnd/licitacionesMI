import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3">

                    <Image
                        src="/images/logo.png"
                        alt="Municipio de Ituzaingo"
                        width={200}
                        height={108}
                        priority
                    />

                </Link>
            </div>
        </header>
    )   
}