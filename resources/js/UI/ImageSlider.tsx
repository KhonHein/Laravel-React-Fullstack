import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './imageSlider.css'
import { anounceImgSliders } from '../../js/data//images/data'
import { ImgSliderType } from '../type/type';
import { baseUrl } from '../pages/admin/config/config';
const ImageSlider = () => {
  return (
    <div className="slide-container">
      <Fade>
        {anounceImgSliders.map((slide:ImgSliderType, index) => (
          <div key={index}>
            <img src={`${baseUrl}/storage/images/${slide.image_url}`} alt=''/>
            <h4 className='color_1'>{slide.caption}</h4>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default ImageSlider
