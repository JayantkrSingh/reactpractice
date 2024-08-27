import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import './MosaicLayout.css'

const MosaicLayout = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then(res => res.json())
            .then(response => setData(response))
            
    }, [])
    return (
        <div className="container">
            {data.map((obj, index) => (
                <LazyLoad key={index} height={200} once>
                    <img src={obj.url} alt="" className="image-class" height='100%' width='100%' />
                </LazyLoad>
            ))}
        </div>
    )
}

export default MosaicLayout;