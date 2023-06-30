import React, { useState } from 'react';
import Layout from './layout';
import Select from 'react-select';
import { useCreatePostMutation } from '../redux/apiSlice';

const Create = () => {
    const initialvalue = {
        author: '',
        title: '',
        tags: [],
        description: '',
        uploadTime: ''
    }
    const [formData, setFormData] = useState(initialvalue);
    const [tags, setTags] = useState([]);
    const [createPost] = useCreatePostMutation();

    const handleChnage = (e) => {
        let input = e.target;
        setFormData({ ...formData, [input.name]: input.value });
    };   
    const handleSubmit = (e) => {
        e.preventDefault();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const date = new Date();
        let monthName = monthNames[date.getMonth()];
        let currentDate = date.getDate();
        let currentYr = date.getFullYear();
        let fullTime = `${monthName} ${currentDate}, ${currentYr}`;
        createPost({ ...formData, uploadTime: fullTime });
        setFormData(initialvalue);
        setTags([]);
    };


    const handleSelect = (val) => {
        setTags(val);
        let selectedVal = val.map(obj => Object.values(obj)[0]);
        setFormData({ ...formData, tags: selectedVal });
    };

    const colourOptions = [
        { value: "Spring", label: "Spring" },
        { value: "Summer", label: "Summer" },
        { value: "Autumn", label: "Autumn" },
        { value: "Winter", label: "Winter" }
    ];
    return (
        <Layout className='grid place-items-center'>
            <div className='bg-white max-w-[600px] w-full shadow-md rounded'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 p-[30px] pb-0'>
                        <div className='flex flex-col px-2'>
                            <label htmlFor="author" className='text-[#39afc4] mb-1 ps-1'>Author</label>
                            <input type="text" value={formData.author} className='border-[1px] border-[#39afc4] focus:border-[2px] rounded outline-none py-[8px] px-[10px]' onChange={handleChnage} name='author' />
                        </div>
                        <div className='flex flex-col px-2'>
                            <label htmlFor="title" className='text-[#39afc4] mb-1 ps-1'>Title</label>
                            <input type="text" value={formData.title} className='border-[1px] border-[#39afc4] focus:border-[2px] rounded outline-none py-[8px] px-[10px]' onChange={handleChnage} name='title' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 p-[30px] pt-[17px]'>
                        <div className="px-2">
                            <label htmlFor="description" className='inline-block text-[#39afc4] mb-1 ps-1'>Description</label>
                            <textarea onChange={handleChnage} value={formData.description} className='w-full border-[1px] border-[#39afc4] focus:border-[2px] rounded outline-none py-[8px] px-[10px]' name="description" id="desc" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="p-[30px] pt-0">
                        <Select
                            isMulti
                            name="tags"
                            options={colourOptions}
                            className="basic-multi-select border-none outline-none"
                            classNamePrefix="select"
                            onChange={handleSelect}
                            value={tags}
                        />
                    </div>
                    <div className="p-2 w-full mb-[30px]">
                        <button type='submit' className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Button</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Create;
