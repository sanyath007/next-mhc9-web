import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="h-[60px] bg-black text-white flex items-center">
            <div className="container flex flex-row items-center">
                <div className="text-2xl font-bold w-[120px]">Navbar</div>
                <div className="">
                    <ul className="flex flex-row gap-4">
                        <li><Link href="/">หน้าหลัก</Link></li>
                        <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                        <li><Link href="/news/category/2">ข่าวกิจกรรม</Link></li>
                        <li><Link href="/news/category/3">ข่าวจัดซื้อจัดจ้าง</Link></li>
                        <li><Link href="/news/category/5">ประกาศ</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar