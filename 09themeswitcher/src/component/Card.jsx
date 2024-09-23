import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow 
        dark:bg-customNavy dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="image/dp.png" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        ADITYA RAJ SINGH || FRONT-END DEVLOPER
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">

                    <span>
                        <span className=" text-black text-xs font-extrabold mr-2 px-3 py-0.5 rounded  dark:text-customSky ml-3">SKILLS</span>
                        <br />
                        <ol className="grid grid-cols-3 gap-3 pl-5">
                            <li className="text-black text-xs font-semibold px-3 py-0.5 rounded dark:text-white">
                                CSS (Tailwind CSS)
                            </li>
                            <li className="text-black text-xs font-semibold px-3 py-0.5 rounded dark:text-white">
                                JAVASCRIPT (REACT JS)
                            </li>
                            <li className="text-black text-xs font-semibold px-3 py-0.5 rounded dark:text-white">
                                SQL
                            </li>
                            <li className="text-black text-xs font-semibold px-3 py-0.5 rounded dark:text-white">
                                PYTHON
                            </li>
                            <li className="text-black text-xs font-semibold px-3 py-0.5 rounded dark:text-white">
                                ASP.NET
                            </li>
                            <li className="text-black text-xs font-semibold px-3 py-0.5 rounded dark:text-white">
                                C++
                            </li>
                        </ol>
                    </span>
                </div>
                <div className="flex items-center justify-center">
                
                    <a
                        href='image/Resume.pdf'
                        download
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        DOWNLOAD RESUME
                    </a>
                </div>
            </div>
        </div>
    );
}
