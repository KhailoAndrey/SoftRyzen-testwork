import SwiperCore from 'swiper';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

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
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../images/slide1.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Cases = () => {
  const carouselSettings = {
    spaceBetween: 16,
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
              <Arrow rotateRight />
            </SwipeBtnRight>
          </SwiperButtons>
        </CasesHeadBox>
        <Swiper {...carouselSettings}>
          <SwiperSlide>
            <SwiperItem>
              <SwiperImg>
                <picture>
                  <source srcSet={slide1} type="image/jpeg" />
                  <img src={slide1} alt="slide" />
                </picture>
              </SwiperImg>
              <SwiperInfo>
                <SwiperTitleBox>
                  <SwiperItemTitle>
                    Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI
                    BUH”
                  </SwiperItemTitle>
                  <SwiperItemBtnLink>
                    <Arrow rotateUpLeft scale={0.77} />
                  </SwiperItemBtnLink>
                </SwiperTitleBox>
                <Linee />
                <SwiperInfoBox>
                  <SwiperItemText>
                    Wind Power for auto field irrigation
                  </SwiperItemText>
                  <SwiperItemDate>July 2023</SwiperItemDate>
                </SwiperInfoBox>
              </SwiperInfo>
            </SwiperItem>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem>
              <SwiperImg>
                <picture>
                  <source srcSet={slide1} type="image/jpeg" />
                  <img src={slide1} alt="slide1" />
                </picture>
              </SwiperImg>
              <SwiperInfo>
                <SwiperTitleBox>
                  <SwiperItemTitle>
                    Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI
                    BUH”
                  </SwiperItemTitle>
                  <SwiperItemBtnLink>
                    <Arrow rotateUpLeft scale={0.77} />
                  </SwiperItemBtnLink>
                </SwiperTitleBox>
                <Linee />
                <SwiperInfoBox>
                  <SwiperItemText>
                    Wind Power for auto field irrigation
                  </SwiperItemText>
                  <SwiperItemDate>July 2023</SwiperItemDate>
                </SwiperInfoBox>
              </SwiperInfo>
            </SwiperItem>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </>
  );
};

export default Cases;
