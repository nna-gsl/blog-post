import React from 'react';
import Layout from './layout';

const Login = () => {
    return (
        <Layout className="grid place-items-center ">
            <div className=' my-[50px] shadow-md rounded-md bg-white p-[40px] '>
                <form>
                    <div className="w-[400px] h-full flex flex-col justify-between">
                        <div className='mb-[30px]'>
                            <div className='w-full mb-[50px] mt-[25px]'>
                                <input type="text" placeholder='Username' className='w-full border-b-[#39afc4] border-b-[2px] py-[6px] ps-0 focus:outline-none' />
                            </div>
                            <div className='w-full mb-[20px]'>
                                <input type="password" placeholder='Password' className='w-full border-b-[#39afc4] border-b-[2px] py-[6px] ps-0 focus:outline-none' />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button type='submit' className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Login;
