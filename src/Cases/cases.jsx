import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

import { Linee } from 'utils/line.styled';
import {
  Arrow,
  CasesHeadBox,
  CasesTitle,
  LineVert,
  SwipeBtnLeft,
  SwipeBtnRight,
  SwiperButtons,
  SwiperImg,
  SwiperInfo,
  SwiperInfoBox,
  SwiperItem,
  SwiperItemBtnLink,
  SwiperItemDate,
  SwiperItemText,
  SwiperItemTitle,
  SwiperNumberSlide,
  SwiperTitleBox,
  Wrapper,
} from './cases.styled';

import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import slide4 from '../images/slide4.jpg';
import slide5 from '../images/slide5.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Cases = ({ slides }) => {
  const carouselSettings = {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    spaceBetween: 40,
    slidesPerView: 1,
    // breakpoints: {
    //   768: {
    //     spaceBetween: 24,
    //     // slidesPerView: 1.33,
    //   },
    //   1280: {
    //     // slidesPerView: 1.25,
    //   },
    // },
    loop: true,
    initialSlide: 0,
    navigation: {
      nextEl: '.swiper-next-btn',
      prevEl: '.swiper-prev-btn',
    },
    speed: 1000,
  };

  const swiperSlides = slides.map(({ id, photo, title, alt, date }) => (
    <SwiperSlide key={id}>
      <SwiperItem>
        <SwiperImg>
          {/* <picture>
            <source
              srcSet={require(`../../src/images/slide${id}.jpg`).default}
              type="image/jpeg"
            /> */}
          <img
            src={photo}
            alt="slide"
          />
          {/* </picture> */}
        </SwiperImg>
        <SwiperInfo>
          <SwiperTitleBox>
            <SwiperItemTitle>{title}</SwiperItemTitle>
            <SwiperItemBtnLink>
              <Arrow rotateupleft="true" scale={0.77} />
            </SwiperItemBtnLink>
          </SwiperTitleBox>
          <Linee />
          <SwiperInfoBox>
            <SwiperItemText>{alt}</SwiperItemText>
            <SwiperItemDate>{date}</SwiperItemDate>
          </SwiperInfoBox>
        </SwiperInfo>
      </SwiperItem>
    </SwiperSlide>
  ));
  return (
    <>
      <Wrapper>
        <CasesHeadBox>
          <CasesTitle>Successful cases of our company</CasesTitle>
          <LineVert />
          <SwiperButtons>
            <SwiperNumberSlide>01/05</SwiperNumberSlide>
            <SwipeBtnLeft className={`swiper-prev-btn`}>
              <Arrow />
            </SwipeBtnLeft>
            <SwipeBtnRight className={`swiper-next-btn`}>
              <Arrow rotateright="true" />
            </SwipeBtnRight>
          </SwiperButtons>
        </CasesHeadBox>
        {/* <Slides> */}
        <Swiper {...carouselSettings}>
          {swiperSlides}
          {/* <div>
              {slides.map(({ id, photo, title, alt, date }) => (
                  <SwiperSlide key={id}>
                    <SwiperItem>
                      <SwiperImg>
                        <picture>
                          <source srcSet={photo} type="image/jpeg" />
                          <img src={photo} alt="slide" />
                        </picture>
                      </SwiperImg>
                      <SwiperInfo>
                        <SwiperTitleBox>
                          <SwiperItemTitle>{title}</SwiperItemTitle>
                          <SwiperItemBtnLink>
                            <Arrow rotateupleft="true" scale={0.77} />
                          </SwiperItemBtnLink>
                        </SwiperTitleBox>
                        <Linee />
                        <SwiperInfoBox>
                          <SwiperItemText>{alt}</SwiperItemText>
                          <SwiperItemDate>{date}</SwiperItemDate>
                        </SwiperInfoBox>
                      </SwiperInfo>
                    </SwiperItem>
                  </SwiperSlide>
                )
              )}
            </div> */}
        </Swiper>
        {/* </Slides> */}
      </Wrapper>
    </>
  );
};

export default Cases;
