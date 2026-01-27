import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (<>
        <div className='flex gap-4'>
            <Link to="/id-card" className='text-2xl'>ID</Link>
            <Link to="/likes-counter" className='text-2xl'>Likes</Link>
            <Link to="/bulb" className='text-2xl'>Bulb</Link>
        </div>
        <footer className="bg-sky-950 text-white fixed bottom-0 w-full">
            <div className="w-full md:px-6 px-2 md:py-8 py-4">
                <div className="flex flex-col md:flex-row justify-between gap-6 text-justify">
                    <div className="w-1/2 text-md text-gray-200">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                            quidem quo temporibus suscipit sit nobis omnis explicabo ad aliquid
                            id vero, earum quis possimus. Nesciunt illo vitae ex nemo architecto
                            maiores aliquid consequuntur blanditiis.
                        </p>
                    </div>

                    <div className="w-1/2">
                        <ul className="flex flex-row md:flex-col gap-2 text-md md:items-end justify-around">
                            <li className="hover:text-sky-300 cursor-pointer px-0.5">Join</li>
                            <li className="hover:text-sky-300 cursor-pointer px-0.5">About Us</li>
                            <li className="hover:text-sky-300 cursor-pointer px-0.5">Contact</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    </>
    )
}

export default Footer
