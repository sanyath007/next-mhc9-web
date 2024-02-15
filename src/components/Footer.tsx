import React from 'react'
import Link from 'next/link'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <footer>
            <div className="top container">
                <div>
                    {/* Row */}
                    <div className="footer-row">
                        {/* Col */}
                        <div className="footer-col footer-menu">
                            <h2>รู้จักเรา</h2>
                            <ul>
                                <li><Link href="/about">ประวัติความเป็นมา</Link></li>
                                <li><Link href="/vision">วิสัยทัศน์/พันธกิจ/ค่านิยม</Link></li>
                                <li><Link href="/executives">ผู้บริหารหน่วยงาน</Link></li>
                                <li><Link href="/structure">โครงสร้างองค์กร</Link></li>
                                <li><Link href="/authority">หน้าที่และอำนาจ</Link></li>
                                <li><Link href="/procedures">มาตรฐานการปฏิบัติงาน</Link></li>
                                <li><Link href="/manuals">มาตรฐานการให้บริการ</Link></li>
                                <li><Link href="/laws">กฎ ระเบียบ ข้อบังคับ</Link></li>
                                <li><Link href="/policies">นโยบายองค์กร</Link></li>
                                <li><Link href="/annual-reports">รายงานประจำปี</Link></li>
                            </ul>
                        </div>
                        {/* Col */}
                        <div className="footer-col footer-menu">
                            <h2>บริการ</h2>
                            <ul>
                                <li><Link href="/">ศูนย์ข้อมูลข่าวสาร</Link></li>
                                <li><Link href="/appeal">ศูนย์ราชการใสสะอาด</Link></li>
                                <li><a href="https://secret.dmh.go.th/main" target="_blank">แจ้งเรื่องร้องเรียน</a></li>
                                <li><a href="https://mhc9dmh.com/Query.aspx" target="_blank">กระดานถาม-ตอบ</a></li>
                                {/* <li><Link href="/faq">คำถามที่ถามบ่อย (FAQ)</Link></li> */}
                                <li><Link href="/e-services">ระบบสารสนเทศ (E-Service)</Link></li>
                                <li><Link href="/downloads">ดาวน์โหลดเอกสาร</Link></li>
                            </ul>
                        </div>

                        {/* Col */}
                        <div className="footer-col footer-menu">
                            <h2>สำหรับเจ้าหน้าที่</h2>
                            {/* <ul>
                                {services.map(service => (
                                    <li key={service.id}>
                                        <a href={service.link} target='_blank'>{service.name}</a>
                                    </li>
                                ))}
                            </ul> */}
                        </div>

                        {/* Col */}
                        <div className="footer-col footer-menu">
                            <h2>ติอต่อเรา</h2>
                            <ul className="footer-address">
                                <li>ศูนย์สุขภาพจิตที่ 9</li>
                                <li>เลขที่ 86 ถ.ช้างเผือก ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000</li>
                                <li>โทรศัพท์ 0-4425-6729</li>
                                <li>โทรสาร 0-4425-6730</li>
                                <li>อีเมล mhc9dmh@gmail.com</li>
                            </ul>

                            <SocialIcons />
                        </div>
                    </div>
                    {/* Row */}
                    <div className="footer-row">
                        <div className="footer-col footer-policy">
                            <div className="standard-wrapper">
                                <div className="standard-logo">
                                    <img src="https://anamai.moph.go.th/assets/app/images/icon/ipv6.png" alt="standard-logo" />
                                </div>
                                <div className="standard-logo">
                                    <img src="https://anamai.moph.go.th/assets/app/images/icon/w3c.png" alt="standard-logo" />
                                </div>
                            </div>
                            <div className="policy-wrapper">
                                <Link href="/website-policy">นโยบายเว็บไซต์</Link> |
                                <Link href="/">นโยบายการคุ้มครองข้อมูลส่วนบุคคล</Link> |
                                <Link href="/">นโยบายการรักษาความมั่นคงปลอดภัยเว็บไซต์</Link>
                            </div>
                        </div>
                        <div className="footer-col footer-stat">
                            {/* <i className="fas fa-users"></i> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    ©2020 ศูนย์สุขภาพจิตที่ 9 All Rights Reserved | DESIGNED BY 
                    <a href="https://www.query-studio.com" target="_blank" rel="noreferrer">
                        นายสัญญา ธรรมวงษ์
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer