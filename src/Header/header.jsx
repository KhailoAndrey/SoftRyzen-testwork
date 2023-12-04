import Logo from 'Logo/logo';
import {
  BtnIcon,
  BtnTouch,
  BurgerBtn,
  Container,
  HeaderContainer,
  OverflowHidden,
  TouchArrow,
  TouchText,
} from './header.styled';
import { useEffect, useRef, useState } from 'react';
import BurgerMenu from 'Burger/burger';
import useModal from 'hooks/useModal';

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const { isModalOpen, setIsModalOpen } = useModal('modalOpen');

  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsTransparent(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }
  function handleOutsideClick(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  }

  const handleScroll = () => {
    const sectionId = 'contacts';
    const section = document.getElementById(sectionId);

    if (section) {
      const headerHeight = 70;
      const sectionRect = section.getBoundingClientRect();

      window.scrollTo({
        top: sectionRect.top + window.scrollY - headerHeight,
        left: 0,
        behavior: 'smooth',
      });
      setIsTransparent(false);
    }
  };
  return (
    <>
      <Container
        style={{
          background: isTransparent ? 'transparent' : 'var(--white-clr)',
        }}
      >
        <HeaderContainer id="header">
          <Logo />
          <BurgerBtn onClick={isModalOpen ? closeModal : openModal}>
            <BtnIcon />
          </BurgerBtn>
          <BtnTouch onClick={handleScroll}>
            <TouchText>Get in touch</TouchText>
            <TouchArrow />
          </BtnTouch>
        </HeaderContainer>
      </Container>
      {isModalOpen && (
        <div ref={modalRef} id="modal">
          <OverflowHidden className={isModalOpen ? 'modal-open' : ''}>
            <BurgerMenu onClose={closeModal} />
          </OverflowHidden>
        </div>
      )}
    </>
  );
};

export default Header;
