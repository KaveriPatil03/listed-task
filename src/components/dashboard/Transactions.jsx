import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SideBar from './SideBar'

const Transactions = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            // const res = await axios.get(`https://api.artic.edu/api/v1/artworks`);
            // console.log(res.data.data);
            try {
                const res = await axios.get(`https://api.artic.edu/api/v1/artworks`);
                console.log(res.data.data);                
                setData(res.data.data);
            } catch (error) {
                if (error.res.status === 404) {
                    console.log("Data not found");
                } else {
                    console.log(error);
                }
            }
        }
        getData()
        
    }, [])

    return (
        <>
            <div>
                <SideBar />

                {/* start */}
                <div className='transaction-card'>
                    {
                        data.map((e, i) => (
                            <div key={i} className='inner-transaction-card'>
                                <div className='card'>
                                    <div className="card-body">
                                        <h4>Title: {e.title}</h4>
                                        <div className='card-content'>
                                        <p><b>Category</b>: {e.api_model}</p>
                                        <p><b>Artist name</b>: {e.artist_title}</p>
                                        <p><b>Department</b>: {e.department_title}</p>
                                        <p><b>Artwork Type</b>: {e.artwork_type_title}</p>
                                        </div>
                                        {/* <img src={e.config.iiif_url} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* end */}
            </div>
        </>
    )
}

export default Transactions