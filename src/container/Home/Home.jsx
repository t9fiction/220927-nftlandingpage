import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import images from "../../constant/images";
import "./Home.css";

// import required modules
import { EffectCards } from "swiper";

const Home = () => {
  return (
    <div className="app__home section__padding">
      <div className="app__home_content">
        <h1>DISCOVER, AND COLLECT DIGITAL ART NFTS</h1>
        <p className="p__font1">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <button className="button_1">Explore Now</button>
        <div className="app__home_content_amount">
          <div>
            <h1>98K+</h1>
            <p>Artwork</p>
          </div>
          <div>
            <h1>12K+</h1>
            <p>Auction</p>
          </div>
          <div>
            <h1>15K+</h1>
            <p>Artist</p>
          </div>
        </div>
      </div>
      <div className="app__home_images">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <img src={images.gradient_1} />
            <div className="swiper__content">
              <div className="swiper__content_top">
                <h1>Abstr Gradient NFT</h1>
                <div className="swiper__content_profil">
                  <img src={images.profil} />
                  <p>Arief Wahyudi</p>
                </div>
              </div>
              <div className="swiper__content_bottom">
                <div className="content__1">
                  <h1>Current Bid</h1>
                  <div className="current__bid">
                    <img src={images.eth} />
                    <p>0.35 eth</p>
                  </div>
                </div>
                <div className="content__2">
                  <div className="ends__in">
                    <h1>Ends in</h1>
                    <ul>
                      <li>12h</li>
                      <li>43m</li>
                      <li>42s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_2} />
            <div className="swiper__content">
              <div className="swiper__content_top">
                <h1>Abstr Gradient NFT</h1>
                <div className="swiper__content_profil">
                  <img src={images.profil} />
                  <p>Arief Wahyudi</p>
                </div>
              </div>
              <div className="swiper__content_bottom">
                <div className="content__1">
                  <h1>Current Bid</h1>
                  <div className="current__bid">
                    <img src={images.eth} />
                    <p>0.35 eth</p>
                  </div>
                </div>
                <div className="content__2">
                  <div className="ends__in">
                    <h1>Ends in</h1>
                    <ul>
                      <li>12h</li>
                      <li>43m</li>
                      <li>42s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_3} />
            <div className="swiper__content">
              <div className="swiper__content_top">
                <h1>Abstr Gradient NFT</h1>
                <div className="swiper__content_profil">
                  <img src={images.profil} />
                  <p>Arief Wahyudi</p>
                </div>
              </div>
              <div className="swiper__content_bottom">
                <div className="content__1">
                  <h1>Current Bid</h1>
                  <div className="current__bid">
                    <img src={images.eth} />
                    <p>0.35 eth</p>
                  </div>
                </div>
                <div className="content__2">
                  <div className="ends__in">
                    <h1>Ends in</h1>
                    <ul>
                      <li>12h</li>
                      <li>43m</li>
                      <li>42s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_4} />
            <div className="swiper__content">
              <div className="swiper__content_top">
                <h1>Abstr Gradient NFT</h1>
                <div className="swiper__content_profil">
                  <img src={images.profil} />
                  <p>Arief Wahyudi</p>
                </div>
              </div>
              <div className="swiper__content_bottom">
                <div className="content__1">
                  <h1>Current Bid</h1>
                  <div className="current__bid">
                    <img src={images.eth} />
                    <p>0.35 eth</p>
                  </div>
                </div>
                <div className="content__2">
                  <div className="ends__in">
                    <h1>Ends in</h1>
                    <ul>
                      <li>12h</li>
                      <li>43m</li>
                      <li>42s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_5} />
            <div className="swiper__content">
              <div className="swiper__content_top">
                <h1>Abstr Gradient NFT</h1>
                <div className="swiper__content_profil">
                  <img src={images.profil} />
                  <p>Arief Wahyudi</p>
                </div>
              </div>
              <div className="swiper__content_bottom">
                <div className="content__1">
                  <h1>Current Bid</h1>
                  <div className="current__bid">
                    <img src={images.eth} />
                    <p>0.35 eth</p>
                  </div>
                </div>
                <div className="content__2">
                  <div className="ends__in">
                    <h1>Ends in</h1>
                    <ul>
                      <li>12h</li>
                      <li>43m</li>
                      <li>42s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.gradient_6} />
            <div className="swiper__content">
              <div className="swiper__content_top">
                <h1>Abstr Gradient NFT</h1>
                <div className="swiper__content_profil">
                  <img src={images.profil} />
                  <p>Arief Wahyudi</p>
                </div>
              </div>
              <div className="swiper__content_bottom">
                <div className="content__1">
                  <h1>Current Bid</h1>
                  <div className="current__bid">
                    <img src={images.eth} />
                    <p>0.35 eth</p>
                  </div>
                </div>
                <div className="content__2">
                  <div className="ends__in">
                    <h1>Ends in</h1>
                    <ul>
                      <li>12h</li>
                      <li>43m</li>
                      <li>42s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
