// import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow 
        dark:bg-customNavy dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-full" src="image/dp.png" alt="product_image1 hover:scale-110" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <h5 className='hover:scale-110'>ADITYA RAJ SINGH</h5>

                        <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-customSky hover:scale-110'>
                            FRONT-END DEVLOPER
                        </h5>
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">

                    <span>
                        <span className=" text-black text-l font-bold mr-2 px-3 py-0.5 rounded  dark:text-customSky ml-3"><h6 className=' hover:scale-110 '>SKILLS</h6></span>
                        <ol className="grid grid-cols-3 gap-4 p-2">
                            <li className="text-black text-sm font-semibold px-3 py-0.5 rounded dark:text-white hover:scale-110">
                                HTML CSS
                            </li>
                            <li className="text-black text-sm font-semibold px-3 py-0.5 rounded dark:text-white hover:scale-110">
                                JAVASCRIPT
                            </li>
                            <li className="text-black text-sm font-semibold px-3 py-0.5 rounded dark:text-white hover:scale-110">
                                SQL
                            </li>
                            <li className="text-black text-sm font-semibold px-3 py-0.5 rounded dark:text-white hover:scale-110">
                                PYTHON
                            </li>
                            <li className="text-black text-sm font-semibold px-3 py-0.5 rounded dark:text-white hover:scale-110">
                                ASP.NET
                            </li>
                            <li className="text-black text-sm font-semibold px-3 py-0.5 rounded dark:text-white hover:scale-110">
                                C++
                            </li>
                            <li className="text-black text-sm font-semibold px-3 py-0.5 rounded dark:text-white hover:scale-110">
                                REACT JS
                            </li>
                            <li className="text-black text-sm font-semibold px-3 py-0.5 rounded dark:text-white hover:scale-110">
                                TAILWIND CSS
                            </li>
                        </ol>
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-5">
                        <a href="https://github.com/rajAditya-singh?tab=repositories" >
                            <img src="image/git.png" alt="" width="25px" height="25px" className='hover:scale-110'></img>
                        </a>
                        <a href="https://www.linkedin.com/in/aditya-raj-singh-20b5a6313/">
                            <img src="image/link.png" alt="" width="30px" height="30px" className='hover:scale-110'></img>
                        </a>
                        <a href="https://www.instagram.com/_aaddii_tya_/">
                            <img src="image/insta.png" alt="" width="25px" height="25px" className='hover:scale-110'></img>
                        </a>
                    </div>
                    <a
                        href='image/Resume.pdf'
                        download
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-105"
                    >
                        DOWNLOAD RESUME
                    </a>
                </div>
            </div>
        </div>
    );
}
