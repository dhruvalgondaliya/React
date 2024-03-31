import React, { useState } from 'react';

function MainHoc(WrappedComponent) {
    const EnhancedComponent = (props) => {
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count + 1);
        };

        return <WrappedComponent {...props} count={count} increment={increment} />;
    };

    return EnhancedComponent;
}
export default MainHoc;