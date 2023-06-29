import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#39afc4] px-[50px] shadow-md fixed w-full z-10'>
            <div className='mx-auto'>
                <div className='flex justify-between'>
                    <div></div>
                    <div className='flex items-center'>
                        <ul>
                            <Link to="/" className='text-white inline-block px-3 py-[25px] mx-2 text-[18px] cursor-pointer'>Home</Link>
                            <Link to="/create" className='text-white inline-block px-3 py-[25px] mx-2 text-[18px] cursor-pointer'>Create</Link>
                            <Link to="/update" className='text-white inline-block px-3 py-[25px] mx-2 text-[18px] cursor-pointer'>Update</Link>
                        </ul>
                        <div className='flex'>
                            <Link to="/login" className='px-[15px] py-[8px] ml-[15px] rounded-[20px] bg-white text-[#39afc4]' >Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
