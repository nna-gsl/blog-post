import React from 'react';
import { MdClose } from 'react-icons/md';
import Select from 'react-select';
const Popup = ({showPopup,closeModal,post}) => {
    const colourOptions = [
        { value: "Spring", label: "Spring" },
        { value: "Summer", label: "Summer" },
        { value: "Autumn", label: "Autumn" },
        { value: "Winter", label: "Winter" }
    ];
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className='absolute right-2 top-2 text-[20px] text-stone-400 hover:text-stone-600 cursor-pointer'><MdClose onClick={closeModal} /></div>
                    <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
                    <div className='min-w-[385px] w-full'>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="author" className='text-[14px] ps-2 pb-[3px]'>Author</label>
                            <input type="text" value={post.author} className='border-[1px] border-[#39afc4] focus:border-[2px] rounded outline-none py-[8px] px-[10px]' name='author' id='author' />
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="title" className='text-[14px] ps-2 pb-[3px]'>Title</label>
                            <input type="text" value={post.title} className='border-[1px] border-[#39afc4] focus:border-[2px] rounded outline-none py-[8px] px-[10px]' name='author' id='title' />
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="description" className='text-[14px] ps-2 pb-[3px]'>Description</label>
                            <textarea value={post.description}  className='w-full border-[1px] border-[#39afc4] focus:border-[2px] rounded outline-none py-[8px] px-[10px]' name="description" cols="30" rows="5" id='description' />
                        </div>
                        <div className='mb-3'>
                        <Select
                            isMulti
                            name="tags"
                            options={colourOptions}
                            className="basic-multi-select border-none outline-none"
                            classNamePrefix="select"
                        />
                        </div>
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
