import React from 'react';
import Layout from './layout';
import { useGetPostQuery } from '../redux/apiSlice';



const Home = () => {
    const { data } = useGetPostQuery();

    return (
        <Layout>
            <div className='px-[50px] lg:px-[30px]'>
                <div className=' grid grid-cols-4 gap-10 mx-auto'>
                    {
                        data && data.length > 0 && data.map(item => {
                            console.log("🚀 ~ file: home.js:16 ~ Home ~ item:", item.tags)
                            let x = item.tags.reduce((arr,ff) => {
                                arr.push(ff.value)   ;
                                return arr                             
                            },[])
                            let tagVal = x.join(", ")
                             console.log("🚀 ~ file: home.js:22 ~ Home ~ tagVal:", tagVal)
                             return (
                             <div className='mb-[40px]'>
                                <div>
                                    <div className='relative p-[40px] min-h-[306px] flex  flex-col bg-white shadow-xl hover:shadow-sm duration-500'>
                                        <h6 className='text-[#8d8d8d] pb-2 mb-2'>by <span className=' capitalize'>{item.author}</span> &nbsp; &nbsp; <span className='capitalize'>{item.uploadTime} </span></h6>
                                        <div>
                                            <h2 className='text-black text-[31px] leading-[30px] font-[700]'>{item.title}</h2>
                                            <p className='text-[#8d8d8d] pt-3 mt-2'>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className=' absolute bottom-[40px] left-[40px]'>
                                            <p className='uppercase text-[#8d8d8d]'>{tagVal}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
}

export default Home;
