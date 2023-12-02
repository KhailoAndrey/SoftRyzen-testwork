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
  Slides,
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
  SwiperNumberTotal,
  SwiperTitleBox,
  Wrapper,
} from './cases.styled';
import { useRef, useState } from 'react';
import SwiperSlideImg from './swiperItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Cases = ({ slides }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.swiper.realIndex);
    }
  };

  const carouselSettings = {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      768: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    },
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
          <SwiperSlideImg photo={photo} />
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
      <Wrapper id="cases">
        <CasesHeadBox>
          <CasesTitle>Successful cases of our company</CasesTitle>
          <LineVert />
          <SwiperButtons>
            <SwiperNumberSlide>
              {`${(activeIndex + 1).toString().padStart(2, '0')}`}
              <SwiperNumberTotal>/05</SwiperNumberTotal>
            </SwiperNumberSlide>
            <SwipeBtnLeft className={`swiper-prev-btn`}>
              <Arrow />
            </SwipeBtnLeft>
            <SwipeBtnRight className={`swiper-next-btn`}>
              <Arrow rotateright="true" />
            </SwipeBtnRight>
          </SwiperButtons>
        </CasesHeadBox>
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          {...carouselSettings}
        >
          <Slides>{swiperSlides}</Slides>
        </Swiper>
      </Wrapper>
    </>
  );
};

export default Cases;
