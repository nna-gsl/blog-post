import React, { useState } from 'react';
import Layout from './layout';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useDeletePostMutation, useGetPostQuery } from '../redux/apiSlice';
import Popup from '../common/popup';

const Update = () => {
    const [showPopup, setShowPopup] = useState(false); 
    const [editingPost, setEditingPost] = useState(null);   
    const [deletePost,{isLoading}] = useDeletePostMutation();
    const { data } = useGetPostQuery();
    const handleDelete = (id) => {  
        deletePost(id)
    };

    const handleEdit = (post) => { 
        console.log("🚀 ~ file: update.js:17 ~ handleEdit ~ post:", post)
        setEditingPost(post);
        setShowPopup(true);
     };

     const closeModal = () => { 
        setShowPopup(false);
        setEditingPost(null);
      };
   
    return (
        <>
            <Layout>
                <div className="relative max-w-[1500px] mx-auto overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Author name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    tags
                                </th>
                                <th scope="col" colSpan="2" className="px-6 py-3 text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((item, index) => {                                    
                                    let des = item.description;
                                    let description = des.split(' ');
                                    let desArr = description.splice(0, 7);
                                    let desStr = desArr.join(" ");
                                    if (description.length > 7) {
                                        desStr = `${desArr.join(" ")}...`
                                    }
                                    let tags = [];
                                    item.tags.map(tag =>  tags.push(tag.value) )
                                   let tagsItem = tags.join(', ');
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.author}
                                            </th>
                                            <td className="px-6 py-4">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-4" >
                                                {desStr}
                                            </td>
                                            <td className="px-6 py-4">
                                                {tagsItem}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><AiFillEdit className='ml-auto cursor-pointer text-[20px]' onClick={() => handleEdit(item)}/></span>
                                            </td>
                                            <td className="px-6 py-4">
                                                 <span className="font-medium text-rose-600 dark:text-rose-500 hover:underline"><AiFillDelete className='mr-auto cursor-pointer text-[20px]' onClick={() => handleDelete(item.id)} /></span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {
                    showPopup &&  <Popup showPopup={showPopup}  post={editingPost} closeModal={closeModal}/>
                }
               
            </Layout>
        </>
    );
}

export default Update;
