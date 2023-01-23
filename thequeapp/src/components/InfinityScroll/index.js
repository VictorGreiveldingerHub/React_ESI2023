import React, {useState} from 'react';
import './styles.css';

import axios from 'axios';

const InfinityScroll = () => {
    const [datas, setDatas] = useState({});
    
    console.log(datas);

   const images = axios.get('https://pixabay.com/api/', {
    params: {
      key: '33061097-1f52a54ccfe341c6e4f2da427'
    }}).then(res => {
      setDatas(res);
    }).catch(error => {
      console.log(error);
    });

    console.log(datas);
    return (
        <div className="infinity-scroll">
            <h2>Gallery infinie</h2>
        </div>
    );
};

export default InfinityScroll;