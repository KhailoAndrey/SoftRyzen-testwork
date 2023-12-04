import {
  ContactsBlock,
  ContactsBox,
  ContactsInfoBlock,
  ContactsModule,
  ContactsText,
  ContactsTitle,
  FBIcon,
  FormBox,
  InstaIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  SocialBlock,
  Subtitle,
  Wrapper,
} from './contacts.styled';
import ContactsForm from 'Form/contactsForm';

const Contacts = () => {
  return (
    <>
      <Wrapper id="contacts">
        <ContactsTitle>Contact us</ContactsTitle>
        <ContactsModule>
          <ContactsBox>
            <ContactsBlock>
              <Subtitle>Phone:</Subtitle>
              <ContactsInfoBlock>
                <a href="tel:+380981234567" style={{ textDecoration: 'none' }}>
                  <PhoneIcon />
                </a>
                <ContactsText>38 (098) 12 34 567</ContactsText>
              </ContactsInfoBlock>
              <ContactsInfoBlock>
                <a href="tel:+380931234567" style={{ textDecoration: 'none' }}>
                  <PhoneIcon />
                </a>
                <ContactsText>38 (093) 12 34 567</ContactsText>
              </ContactsInfoBlock>
            </ContactsBlock>

            <ContactsBlock>
              <Subtitle>E-mail:</Subtitle>
              <a
                href="mailto:office@ecosolution.com"
                style={{ textDecoration: 'none' }}
              >
                <ContactsInfoBlock>
                  <MailIcon />
                  <ContactsText>office@ecosolution.com</ContactsText>
                </ContactsInfoBlock>
              </a>
            </ContactsBlock>
            <ContactsBlock>
              <Subtitle>Address:</Subtitle>
              <ContactsInfoBlock>
                <MapIcon />
                <ContactsText>
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </ContactsText>
              </ContactsInfoBlock>
            </ContactsBlock>
            <ContactsBlock>
              <Subtitle>Social Networks:</Subtitle>
              <ContactsInfoBlock>
                <SocialBlock>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <FBIcon />
                  </a>
                </SocialBlock>
                <SocialBlock>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <InstaIcon />
                  </a>
                </SocialBlock>
              </ContactsInfoBlock>
            </ContactsBlock>
          </ContactsBox>
          <FormBox>
            <ContactsForm />
          </FormBox>
        </ContactsModule>
      </Wrapper>
    </>
  );
};

export default Contacts;
