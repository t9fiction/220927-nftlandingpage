import React from 'react';
import images from '../../constant/images';

import './Create.css';

const Create = () => {
  return (
    <div className='app__create section__padding'>
      <div className="app__create_left">
        <div className="app__create_left_main">
          <div className="left__main_1">
            <img className='create__nft' src={images.gradient_1} alt="Gradient 1" />
            <img className='profil' src={images.profil} alt="Profil Img" />
          </div>
          <div className="left__main_2">
            <img className='create__nft' src={images.gradient_2} alt="Gradient 1" />
            <img className='profil' src={images.profil} alt="Profil Img" />
          </div>
        </div>
        <div className="app__create_left_child">
            <img className='create__nft' src={images.gradient_3} alt="Gradient 1" />
            <img className='profil' src={images.profil} alt="Profil Img" />
        </div>
      </div>
      <div className="app__create_right">
        <h1 className='h1__font2'>Create and sell your NFTs</h1>
        <p className='p__font1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
        <button className='button_1'>Sign Up Now</button>
      </div>
    </div>
  )
}

export default Create;