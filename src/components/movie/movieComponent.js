import React from 'react'
import image1 from '../../assets/images/img1.jpg'
import image2 from '../../assets/images/img2.jpg'
import image3 from '../../assets/images/img3.jpg'
import image4 from '../../assets/images/img4.jpg'
import image5 from '../../assets/images/img5.jpg'
import image6 from '../../assets/images/img6.jpg'
import image7 from '../../assets/images/img7.jpg'
import image8 from '../../assets/images/img8.jpg'

import Item from './item'

const data = [
    {img:image1,title:'movie1',year:'1980'},
    {img:image2,title:'movie2',year:'2020'},
    {img:image3,title:'movie3',year:'2021'},
    {img:image4,title:'movie4',year:'1990'},
    {img:image5,title:'movie5',year:'2020'},
    {img:image6,title:'movie6',year:'1970'},
    {img:image7,title:'movie7',year:'2023'},
    {img:image8,title:'movie8',year:'2024'}
]

const Movie = () => {
    return (
        <div className='container'>
            <div className='row'>
                {data.map( (i,index)=> <Item key={index} img={i.img} title={i.title} year={i.year}/>)};
            </div>
        </div>
    )
}

export default Movie;
