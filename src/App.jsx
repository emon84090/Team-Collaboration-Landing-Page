import Testimonial from "./components/Testimonial";
import Header from "./components/header/Header";
import { motion } from "framer-motion";

const App = () => {

  return (
    <>
      <div className="hero w-full  lg:h-screen">

        <Header></Header>

        <div className="banner grid  grid-cols-12 gap-4 h-full ">

          <div className="banner-left p-5 lg:pl-44 col-span-12 lg:col-span-8 flex space-y-10 flex-col justify-center">
            <div className="shape flex justify-center">
              <motion.img animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
                transition={{ ease: "linear", duration: 3, repeat: Infinity }} src="images/Group 45.png" className="w-10" alt="" />
            </div>

            <motion.div className="welcome-text mb-2" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }}>
              <span className="bg-white shadow-sm text-[#606060] px-2 py-1 rounded-md">&#9827; Welcome to TeamFlow</span>
            </motion.div>

            <motion.div className="heading mt-3" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1, delay: 1 }}>
              <h1 className="text-white text-4xl  lg:text-6xl font-extrabold font-nuninto">Work the way that <br></br> works for you</h1>
            </motion.div>
            <motion.div className="subtitle mt-9" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1, delay: 1.5 }}>
              <span className="text-base lg:text-xl text-white font-nuninto font-extralight">Create, Build, Collaborate and ship products <br></br> very faster</span>
            </motion.div>
            <motion.div className="button mt-5" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1, delay: 1.7, type: "spring", stiffness: 500 }}>
              <motion.button whileHover={{ scale: [1.1, 1, 1.1, 1, 1.1] }} className="btn">Get Started</motion.button>
            </motion.div>

            <div className="shape flex justify-start">
              <motion.img animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }} src="images/Rectangle 10.png" className="w-10" alt="" />
            </div>


          </div>
          <div className="banner-right lg:-ml-56 relative col-span-12 lg:col-span-4 hidden lg:flex  justify-center items-start flex-col">
            <motion.div className="image-shape-1  flex items-center" animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.8 }}>
              <div className="image">
                <img className="w-80 z-50 " src="./images/shape-1.png" alt="" srcSet="" />
              </div>
              <div className="item p-3 bg-white shadow-xl rounded-lg max-w-sm w-full">
                <div className="badge flex justify-end">
                  <span className="bg-red-300 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Pending</span>
                </div>
                <p className="text-[#6C71A1] text-lg font-nuninto font-semibold">Mark Anderson</p>
                <h3 className="font-nuninto font-bold text-xl text-[#2B3377] mt-0.5">Update Contract Agreement</h3>
                <div className="rating-icon mt-2">
                  <ul>
                    <li><i className='bx bxs-star' ></i></li>
                    <li><i className='bx bxs-star' ></i></li>
                    <li><i className='bx bxs-star' ></i></li>
                    <li><i className='bx bxs-star' ></i></li>
                    <li><i className='bx bxs-star' ></i></li>
                  </ul>
                </div>
              </div>

            </motion.div>

            <motion.div className="review-content  flex  mt-32" animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1, delay: 1 }}>
              <div className="item p-3 bg-white shadow-xl rounded-lg max-w-sm w-full">
                <div className="badge flex justify-end">
                  <span className="bg-[#3ADAD9] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">Done</span>
                </div>
                <p className="text-[#6C71A1] text-lg font-nuninto font-semibold">Lucy Niana</p>
                <h3 className="font-nuninto font-bold text-xl text-[#2B3377] mt-0.5">Develop Communication Plan</h3>
                <div className="rating-icon mt-2">
                  <ul>
                    <li><i className='bx bxs-star' ></i></li>
                    <li><i className='bx bxs-star' ></i></li>
                    <li><i className='bx bxs-star' ></i></li>
                    <li><i className='bx bxs-star' ></i></li>
                    <li><i className='bx bxs-star' ></i></li>
                  </ul>
                </div>
              </div>
              <div className="image ml-3">
                <img className="w-40" src="images/Group 55.png" alt="" />
              </div>

            </motion.div>
          </div>
        </div>


      </div>

      <section id="sponsor">
        <div className="sponsor  mt-5">
          <div className="container">
            <div className="sponsor-all grid-2">
              <motion.div className="left" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
                <h3 className="text-xl lg:text-3xl leading-normal lg:leading-[44px] text-[#515151] font-bold">See why over 100,000 teams choose <br></br> TeamFlow.com
                </h3>
              </motion.div>
              <motion.div className="right flex flex-col md:flex-row items-center justify-between" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}>
                <img className="w-24 ml-5" src="images/image 1.png" alt="" />
                <img className="w-24 ml-5" src="images/image 2.png" alt="" />
                <img className="w-24 ml-5" src="images/image 3.png" alt="" />
                <img className="w-24 ml-5" src="images/image 4.png" alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      <section id="services" >
        <div className="container">
          <div className="heading">
            <motion.h2 className="heading-text" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.9, }}>What you <span className="text-primarycolor">can do?</span></motion.h2>
          </div>

          <div className="service-content mt-8">
            <div className="grid-3">
              <motion.div className="item  flex justify-center items-center flex-col text-center space-y-4 shadow-md p-5 rounded-md" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
                <img src="images/graph_icon.png" className="w-16" alt="" />
                <p className="text-2xl font-bold text-[#2B3377]">Business Planning</p>
                <span className="text-[#585858] text-lg font-normal">Our Business Plan is a written document describing a company’s core business activities.</span>
              </motion.div>
              <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }} className="item flex justify-center items-center flex-col text-center space-y-4 shadow-md p-5 rounded-md">
                <img src="images/financial_icon.png" className="w-16" alt="" />
                <p className="text-2xl font-bold text-[#2B3377]">Financial Planning</p>
                <span className="text-[#585858] text-lg font-normal">Our expert team sensible decision about their money, to ensure they achieve the life goals. A financial plan.</span>
              </motion.div>
              <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }} className="item flex justify-center items-center flex-col text-center space-y-4 shadow-md p-5 rounded-md">
                <img src="images/market_icon (2).png" className="w-16" alt="" />
                <p className="text-2xl font-bold text-[#2B3377]">Market Analysis</p>
                <span className="text-[#585858] text-lg font-normal">A market analysis is a quantitative and qualitative assessment of a market. It looks into the size of the market.</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <div className="heading">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.9, }} className="heading-text">Our <span className="text-primarycolor">Features</span></motion.h2>
          </div>

          <div className="features-container mt-14">
            <div className="grid-2">
              <motion.div className="left" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
                <img className="max-w-xl w-full" src="images/Group 32 (1).png" alt="" />
              </motion.div>
              <motion.div className="right flex flex-col justify-center" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}>
                <h2 className="text-[#4A4A4A] text-2xl md:text-3xl lg:text-4xl font-bold style-heading after:bg-primarycolor">Manage everything
                  in one <br></br> workspace</h2>
                <p className="text-[#575757] text-lg mt-8">Planning, tracking and delivering your team’s best work has never been easier. An integrated workspace that’s simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFF]">
        <div className="container">


          <div className="features-container mt-14">
            <div className="grid-2">
              <motion.div className="left flex flex-col justify-center" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
                <h2 className="text-[#4A4A4A] text-2xl md:text-3xl lg:text-4xl font-bold style-heading after:bg-primarycolor">Set up in minutes
                </h2>
                <p className="text-[#575757] text-lg mt-8">Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful template in minutes.
                  Choose from hundreds of pre-made templates and tell stories with data
                  with our easy drag-and-drop infographic creator.</p>

              </motion.div>
              <motion.div className="right " whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}>
                <img className="max-w-xl w-full" src="images/Group 65.png" alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <motion.h2 className="heading-text" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.9, }}><span className="text-primarycolor">Integrate</span> with your existing tools <br></br>
            in a few clicks</motion.h2>
          <div className="tool-container flex flex-col md:flex-row items-center justify-center mt-10" >

            <motion.img whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} whileHover={{ rotate: 360 }} transition={{ duiration: 0.6 }} className="w-40 h-40 mr-8 mt-4" src="images/image 16.png" alt="" />
            <motion.img whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} whileHover={{ rotate: 360 }} transition={{ duiration: 0.6 }} className="w-40 h-40 mr-8 mt-4" src="images/image 21.png" alt="" />
            <motion.img whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} whileHover={{ rotate: 360 }} transition={{ duiration: 0.6 }} className="w-40 h-40 mr-8 mt-4" src="images/image 17.png" alt="" />

            <motion.img whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} whileHover={{ rotate: 360 }} transition={{ duiration: 0.6 }} className="w-40 h-40 mt-4 " src="images/image 19 (1).png" alt="" />
          </div>
          <div className="view-btn text-center mt-16">
            <motion.button whileHover={{ scale: 1.1 }} className="btn ml-5 ">View All</motion.button>
          </div>

        </div>
      </section>


      <section >
        <div className="container">


          <div className="features-container mt-14">
            <div className="grid-2">
              <motion.div className="left" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
                <img className="max-w-xl w-full" src="images/Group 68.png" alt="" />
              </motion.div>
              <motion.div className="right flex flex-col justify-center" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}>
                <h2 className="text-[#4A4A4A]  font-bold style-heading after:bg-primarycolor text-2xl md:text-3xl lg:text-4xl">Save time with Automations</h2>
                <p className="text-[#575757] text-lg mt-8">Automate the repetitive work in seconds so you can avoid human error and focus on what matters. It gives the impression of software that its highly automated which implies that it is good for client for who want to save time and manage team members easily.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#FAFAFF]">
        <div className="container">


          <div className="features-container mt-14">
            <div className="grid-2">
              <motion.div className="left flex flex-col justify-center" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}>
                <h2 className="text-[#4A4A4A] text-2xl md:text-3xl lg:text-4xl font-bold style-heading after:bg-[#686DF1]">Visualize work with Views
                </h2>
                <p className="text-[#575757] text-lg mt-8">View data as a map, calendar, timeline, kanban, and more
                  The easy-to-use, visual interface lets any team member jump in and get started, no training required.</p>

              </motion.div>
              <motion.div className="right flex justify-center" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
                <img className="max-w-md w-full" src="images/Group 71.png" alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      <section >
        <div className="container">


          <div className=" mt-14">
            <div className="grid-2">
              <motion.div className="left" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}>
                <img className="max-w-xl w-full" src="images/Group 76 (1).png" alt="" />
              </motion.div>
              <motion.div className="right flex flex-col space-y-11" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
                <h2 className="text-[#4A4A4A] text-2xl md:text-3xl lg:text-4xl font-bold style-heading after:bg-primarycolor">24/7 Customer Support</h2>
                <p className="text-[#575757] text-lg mt-8">Our team is here to give you personalized support within the hour available 24/7. In accordance with our commitment to providing superior and professional service. Join daily live webinars, watch our tutorials, or browse through our knowledge
                  base</p>
                <div className="button">
                  <button className="btn">Get Started</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial></Testimonial>

      <section id="support" className="bg-[#FAFAFF]">
        <div className="container">
          <motion.div className="support-content flex justify-normal items-center flex-col space-y-5" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.9, type: "spring", stiffness: 500 }}>
            <p className="text-[#EB801D] font-bold text-2xl">Support</p>
            <h3 className="text-[#2D3150] text-2xl md:text-3xl lg:text-4xl font-bold">Subscribe Newsletter & get</h3>
            <h3 className="font-light text-2xl">Company News</h3>
            <div className="input mt-8 max-w-md relative shadow-xl w-full flex  rounded-2xl h-16 p-2 items-center">
              <i className='bx bxs-envelope  text-[#9092B0] text-xl ml-4 mr-3'></i>
              <input className="w-full h-full outline-none" type="text" name="" id="" placeholder="Your Email" />
              <div className="send-btn">
                <button className="flex items-center text-white rounded-xl p-2 text-base bg-[#686DF1] w-28 h-12"> <i className='bx bxs-send mr-2' ></i>Subscribe</button>
              </div>
            </div>
          </motion.div>
        </div>

      </section>



      <motion.section id="footer" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <div className="container ">
          <footer className="grid-5">
            <div className="item">
              <div className="logo flex items-center">
                <img src="images/footerlogo.png" alt="" />
                <h2 className="ml-2.5 font-semibold text-3xl"><span className="text-[#5565F0]">Team</span><span className="text-[#D77F3F]">Flow</span></h2>
              </div>
              <p className="text-base my-3 text-[#5C5E87]">All Rights Reserved © teamflow.com</p>

              <div className="address mt-10">
                <h3 className="text-[#2B3377] text-xl font-semibold">Address</h3>
                <p className="text-base my-3 text-[#5C5E87]">26 W 12th St. New York, NY 10342, NYC</p>
              </div>
              <div className="social-media mt-10">
                <p className="text-[#2B3377] text-xl font-semibold">Social Media</p>
                <div className="social-icon mt-5">
                  <ul>
                    <li><i className='bx bxl-facebook' ></i></li>
                    <li><i className='bx bxl-twitter' ></i></li>
                    <li><i className='bx bxl-instagram' ></i></li>
                    <li><i className='bx bxl-youtube' ></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <h2 className="mb-6 text-lg text-[#2B3377] font-semibold ">Product</h2>
              <ul className="">
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Product</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Pricing</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Partners</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Affiliate</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Integrations</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Developers</a>
                </li>

              </ul>
            </div>
            <div className="item">
              <h2 className="mb-6 text-lg text-[#2B3377] font-semibold ">Team</h2>
              <ul className="">
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">About Us</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Contact Us</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Careers</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Find a Partner</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">In the News</a>
                </li>
              </ul>
            </div>
            <div className="item">
              <h2 className="mb-6 text-lg text-[#2B3377] font-semibold ">Solutions</h2>
              <ul className="">
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Project Management</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Marketing</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">CRM and Sales</a>
                </li>

                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Software Development</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Constructions</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Creative Production</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Remote Work</a>
                </li>
              </ul>
            </div>
            <div className="item">
              <h2 className="mb-6 text-lg text-[#2B3377] font-semibold ">Resources</h2>
              <ul className="">
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Knowledge Base</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Guides</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Daily Webinars</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Community</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Customer Stories</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Templates</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Video Tutorials</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Blog</a>
                </li>
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-[#5C5E87]">Podcast</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </motion.section>



    </>
  );
};

export default App;