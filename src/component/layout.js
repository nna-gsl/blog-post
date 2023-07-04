import React from 'react';

const Layout = ({children , className}) => {
    return (
        <div className={`bg-[#e6f7f8] ${className} pt-[145px] pb-[77px] min-h-screen`}>
            {children}
        </div>
    );
}

export default Layout;
