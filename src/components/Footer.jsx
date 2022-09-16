import styles from '../style'
import { logo, copyright, twitter, linkedin, facebook, instagram } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                        A new way to make the payments easy, reliable and secure.
                    </p>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerLink) => (
                        <div
                            key={footerLink.key}
                            className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                {footerLink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerLink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-poppins font-normal text-[16px] leading-[25px] text-dimWhite hover:text-secondary cursor-pointer ${
                                            index !== footerLink.links.length - 1 ? 'mb4' : 'mb-0'
                                        }`}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div class="flex-1 flex flex-row flex-wrap justify-between w-full mt-2">
                <div className="flex-1 flex flex-row">
                    <p className="font-poppins font-normal text-[16px] leading-[27px] text-dimWhite mr-2">
                        Copyright
                    </p>
                    <img src={copyright} alt="copyright" className="object-contain mr-2" />
                    <p className="font-poppins font-normal text-[16px] leading-[27px] text-dimWhite mr-2">
                        2021 HooBank. All Rights Reserved.
                    </p>
                </div>

                <div className="w-1/6 justify-end ">
                    <div className="flex flex-row justify-between content-center">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div> */}

            <div className="flex sm:flex-row flex-col sm:justify-between w-full">
                <div className="flex justify-start text-white">01</div>
                <div className="flex justify-end text-white">02</div>
            </div>
        </section>
    )
}

export default Footer
