import React from 'react';
import MainHoc from '../component/MainHoc';

function Button(props) {
    return (
        <div>
            <br /><br />
            <p style={{ fontSize: "20px" }}>{props.count}</p>
            <button className='btn_new' onMouseOver={props.increment}>Mouse Over</button>
        </div>
    );
}
export default MainHoc(Button);
