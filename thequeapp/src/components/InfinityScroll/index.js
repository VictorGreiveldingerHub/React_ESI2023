import React, {useState, useEffect} from 'react';
import './styles.css';

import axios from 'axios';

const InfinityScroll = () => {
    const [datas, setDatas] = useState();
    
    useEffect(() => {
      axios.get('https://pixabay.com/api/', {
        params: {
            key: '33061097-1f52a54ccfe341c6e4f2da427'
        }
      }).then(res => {
        const resultats = res.data.hits;
          resultats.forEach(e => {
            if(e.id >= 7720040 || e.id  <= 7720000){
              console.log(e);
              setDatas(e);
            }
          });
      }).catch(error => {
        console.log(error);
      });
    });
    
    return (
        <div className="infinity-scroll">
            <h2>Gallery infinie</h2>
            <img src="https://cdn.pixabay.com/photo/2023/01/18/15/24/scented-candles-7727169_150.jpg" alt="ok" />
        </div>
    );
};

export default InfinityScroll;