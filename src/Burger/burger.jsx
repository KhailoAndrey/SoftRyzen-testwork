import React, { useState, useEffect } from 'react';
import { Linee } from 'utils/line.styled';
import { ReactComponent as CloseIcon } from '../images/close-light.svg';
import { ReactComponent as LinkIcon } from '../images/arrow-right-up.svg';
import {
  CloseBlock,
  CloseBtn,
  CloseBtnText,
  FBIcon,
  InstaIcon,
  LinkBlock,
  Links,
  ModalBackdrop,
  ModalContent,
  ModalWrapper,
  Navi,
  SocialBlock,
} from './burger.styled';

const links = [
  { name: 'Main', link: 'main' },
  { name: 'About', link: 'values' },
  { name: 'Cases', link: 'cases' },
  { name: 'FAQ', link: 'faq' },
  { name: 'Contact Us', link: 'contacts' },
];

const BurgerMenu = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    const sections = links.map(({ link }) => document.getElementById(link));

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = link => {
    const sectionId = link;
    const section = document.getElementById(sectionId);

    if (section) {
      const headerHeight = 70;
      const sectionRect = section.getBoundingClientRect();

      window.scrollTo({
        top: sectionRect.top + window.scrollY - headerHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
    onClose();
  };

  return (
    <ModalBackdrop>
      <ModalWrapper>
        <ModalContent>
          <CloseBlock>
            <CloseBtn onClick={handleLinkClick}>
              <CloseIcon style={{ stroke: 'var(--white-clr)' }} />
            </CloseBtn>
            <CloseBtnText>close</CloseBtnText>
          </CloseBlock>
          <Linee style={{ background: 'var(--white-clr)' }} />
          <Navi>
            {links.map(({ name, link }) => {
              return (
                <LinkBlock key={link}>
                  <Links
                    onClick={() => handleLinkClick(link)}
                    className={activeSection === link ? 'active' : ''}
                  >
                    {`${name}`}
                    <LinkIcon style={{ stroke: 'var(--white-clr)' }} />
                  </Links>
                </LinkBlock>
              );
            })}
          </Navi>
          <SocialBlock>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <FBIcon />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <InstaIcon />
            </a>
          </SocialBlock>
        </ModalContent>
      </ModalWrapper>
    </ModalBackdrop>
  );
};

export default BurgerMenu;
