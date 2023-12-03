import {
  CloseBlock,
  CloseBtn,
  CloseBtnText,
  LinkBlock,
  Links,
  ModalBackdrop,
  ModalContent,
  ModalWrapper,
  Navi,
} from './burger.styled';
import { ReactComponent as CloseIcon } from '../images/close-light.svg';
import { ReactComponent as LinkIcon } from '../images/arrow-right-up.svg';
import { Linee } from 'utils/line.styled';

const links = [
  { name: 'Main', link: 'main' },
  { name: 'About', link: 'values' },
  { name: 'Cases', link: 'cases' },
  { name: 'FAQ', link: 'faq' },
  { name: 'Contact Us', link: 'contacts' },
];

const BurgerMenu = ({ onClose }) => {
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
                  <Links onClick={() => handleLinkClick(link)}>
                    {`${name}`}
                    <LinkIcon style={{ stroke: 'var(--white-clr)' }} />
                  </Links>
                </LinkBlock>
              );
            })}
          </Navi>
        </ModalContent>
      </ModalWrapper>
    </ModalBackdrop>
  );
};

export default BurgerMenu;
