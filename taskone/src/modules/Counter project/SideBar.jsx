import React, { useState } from 'react';

const Sidebar = () => {
    const [counter, setCounter] = useState(5);
    return (
        <aside>
                <div className="sider_bar">
                    <ul>
                        <h5>Menu</h5>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Help</li>
                    </ul>
                </div>
        </aside>
    );
}

export default Sidebar;
