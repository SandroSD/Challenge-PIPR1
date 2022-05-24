import { useState } from 'react';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return(
        <div className="top-0 left-0 w-[5vw] bg-blue-500 p-1 text-white fixed h-full ">
            <h2 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h2>
        </div>
    )
}

export default Sidebar;