import React from 'react';
import { MdClose } from 'react-icons/md';
const Popup = ({setShowPopup}) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className='absolute right-2 top-2 text-[20px] text-stone-400 hover:text-stone-600 cursor-pointer'><MdClose onClick={() => setShowPopup(false)} /></div>
                    {/* Popup content */}
                    <h2 className="text-2xl font-bold mb-4">Edit Popup</h2>
                    <p>Popup content goes here...</p>
                    {/* Close button */}
                    <button
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                        onClick={() => setShowPopup(false)}

                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
