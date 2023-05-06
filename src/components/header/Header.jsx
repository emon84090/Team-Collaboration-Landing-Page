import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
    const [headerscroll, setheaderscroll] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setheaderscroll(true);
            } else {
                setheaderscroll(false);
            }
        });

    }, []);

    const variants = {
        open: {
            opacity: 1,
            y: 0,

        },
        closed: { opacity: 1, y: -5 },

    }

    const topbuttonvariants = {
        open: {
            opacity: 1,
            y: 0,

        },
        closed: { opacity: 0, y: -800 },

    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <>
            <motion.header animate={headerscroll ? "open" : "closed"}
                variants={variants} className={` py-5 fixed md:translate-x-0 shadow-lg rounded-b-3xl md:rounded-none md:shadow-none bg-white top-0 z-50 w-full ${headerscroll ? 'md:bg-white md:shadow-md' : 'md:bg-transparent'}`}>
                <div className="container mx-auto">
                    <div className={`header flex justify-between flex-wrap md:flex-nowrap  items-start md:items-center text-black  ${headerscroll ? 'md:text-black' : 'md:text-white'}`}>
                        <div className="logo flex items-center">
                            <img src="images/logo.png" alt="" />
                            <p className="ml-1 text-xl font-semibold">Teamflow</p>
                        </div>
                        <div className="clickmenu md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
                            <i className={`bx  text-2xl text-secondarycolor ${menu ? 'bx-x' : 'bx-menu'}`}></i>
                        </div>
                        <div className={`menu transition-all duration-700 ${menu ? "max-h-[500px]  overflow-auto" : "max-h-0 md:max-h-max overflow-hidden"}`} >
                            <ul>
                                <li><a href="">Product <i className='bx bx-chevron-down'></i></a></li>
                                <li><a href="">Solution <i className='bx bx-chevron-down'></i></a></li>
                                <li><a href="">Enterprise</a></li>
                                <li><a href="">Pricing</a></li>
                            </ul>
                            <div className="action-btn flex md:hidden">
                                <button className="text-secondarycolor">login</button>
                                <button className="btn ml-5">Signup</button>
                            </div>
                        </div>
                        <div className="action-btn md:flex hidden ">
                            <button className="text-secondarycolor">login</button>
                            <button className="btn ml-5">Signup</button>
                        </div>
                    </div>
                </div>
            </motion.header>


            <motion.div className="scroll-top" >

                <motion.button transition={{ duration: 0.7 }} onClick={scrollTop} animate={headerscroll ? "open" : "closed"} variants={topbuttonvariants} type="button" className="inline-block p-3 bg-primarycolor text-white font-medium text-xs leading-tight fixed  uppercase rounded-full shadow-md  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out bottom-5 right-5" >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
                </motion.button>
            </motion.div>
        </>
    );
};

export default Header;