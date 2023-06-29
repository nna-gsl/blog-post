import React from 'react';

const Layout = ({children , className}) => {
    return (
        <div className={`bg-[#e6f7f8] ${className} pt-[145px] pb-[77px]`}  style={{minHeight: 'calc(100vh - 77px)'}}>
            {children}
        </div>
    );
}

export default Layout;
