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
                <PhoneIcon />
                <ContactsText>38 (098) 12 34 567</ContactsText>
              </ContactsInfoBlock>
              <ContactsInfoBlock>
                <PhoneIcon />
                <ContactsText>38 (093) 12 34 567</ContactsText>
              </ContactsInfoBlock>
            </ContactsBlock>
            <ContactsBlock>
              <Subtitle>E-mail:</Subtitle>
              <ContactsInfoBlock>
                <MailIcon />
                <ContactsText>office@ecosolution.com</ContactsText>
              </ContactsInfoBlock>
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
                  <FBIcon />
                </SocialBlock>
                <SocialBlock>
                  <InstaIcon />
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
