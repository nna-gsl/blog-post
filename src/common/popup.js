import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import Select from 'react-select';
import { useUpdatePostMutation } from '../redux/apiSlice';
import { useNavigate } from 'react-router-dom';
const Popup = ({closeModal,post}) => {
    const [updatePost] = useUpdatePostMutation();
    const initialvalue = {
        author:post.author,
        title:post.title,
        description:post.description,
        tags:post.tags,
        id:post.id
    }    
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialvalue);
    console.log("🚀 ~ file: popup.js:16 ~ Popup ~ formData:", formData)
    let initialTag = post.tags;
    const [tag, setTag] = useState(initialTag);
    const colourOptions = [
        { value: "Spring", label: "Spring" },
        { value: "Summer", label: "Summer" },
        { value: "Autumn", label: "Autumn" },
        { value: "Winter", label: "Winter" }
    ];

    const handleChange = (e) => {
        let input = e.target;
        setFormData({ ...formData, [input.name]: input.value });
    }; 

    const handleSelect = (val) => {
        setTag(val.value);
        setFormData({...formData , tags: val})
     };

     const handleUpdate = (e) => { 
        e.preventDefault();
        updatePost(formData);
        setFormData({});
        closeModal();
        navigate("/update");
        
      };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className='absolute right-2 top-2 text-[20px] text-stone-400 hover:text-stone-600 cursor-pointer'><MdClose onClick={closeModal} /></div>
                    <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
                    <form onSubmit={handleUpdate}>
                        <div className='min-w-[385px] w-full'>
                            <div className='flex flex-col mb-3'>
                                <label htmlFor="author" className='text-[14px] ps-2 pb-[3px]'>Author</label>
                                <input type="text" onChange={handleChange} className='border-[1px] border-[#39afc4] focus:border-[2px] rounded outline-none py-[8px] px-[10px]' name='author' id='author' value={formData.author} />
                            </div>
                            <div className='flex flex-col mb-3'>
                                <label htmlFor="title" className='text-[14px] ps-2 pb-[3px]'>Title</label>
                                <input type="text" onChange={handleChange} value={formData.title} className='border-[1px] border-[#39afc4] focus:border-[2px] rounded outline-none py-[8px] px-[10px]' name='title' id='title' />
                            </div>
                            <div className='flex flex-col mb-3'>
                                <label htmlFor="description" className='text-[14px] ps-2 pb-[3px]'>Description</label>
                                <textarea value={formData.description} onChange={handleChange} className='w-full border-[1px] border-[#39afc4] focus:border-[2px] text-[14px] rounded outline-none py-[8px] px-[10px]' name="description" cols="30" rows="5" id='description' />
                            </div>
                            <div className='mb-3'>
                            <Select
                                isMulti
                                name="tags"
                                options={colourOptions}
                                className="basic-multi-select border-none outline-none"
                                classNamePrefix="select"
                                value={tag}
                                onChange={handleSelect}
                            />
                            </div>
                            <div className='flex justify-between'>
                                <button
                                    className="mt-4 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                                <button
                                    type='submit'
                                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Popup;
