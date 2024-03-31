import React from 'react';
import MainHoc from '../component/MainHoc';

function Hoc(props) {
    return (
        <div>
            <br /><br />
            <p style={{fontSize:"20px"}}>{props.count}</p>
            <button className='btn_new' onClick={props.increment}>Click me </button>
        </div>
    );
}
export default MainHoc(Hoc);
