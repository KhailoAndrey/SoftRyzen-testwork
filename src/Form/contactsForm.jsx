import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import {
  ArrowRight,
  BtnText,
  ErrorText,
  Form,
  InputBlock,
  MessageInput,
  StyledInput,
  StyledLabel,
  SubmitBtn,
} from './contactsForm.styled';
import { formSchema } from './formSchema';

const ContactsForm = () => {
  return (
    <Formik validationSchema={formSchema}>
      <Form>
        <InputBlock>
          <StyledLabel htmlFor="fullname">* Full name:</StyledLabel>
          <StyledInput
            id="fullname"
            name="fullname"
            placeholder="John Rosie"
            required
          />
          <ErrorMessage name="fullname" component={ErrorText} />
        </InputBlock>
        <InputBlock>
          <StyledLabel htmlFor="email">* E-mail:</StyledLabel>
          <StyledInput
            id="email"
            name="email"
            type="email"
            placeholder="johnrosie@gmail.com"
            required
          />
          <ErrorMessage name="email" component={ErrorText} />
        </InputBlock>
        <InputBlock>
          <StyledLabel htmlFor="phone">* Phone:</StyledLabel>
          <StyledInput
            id="phone"
            name="phone"
            placeholder="380961234567"
            required
          />
          <ErrorMessage name="phone" component={ErrorText} />
        </InputBlock>
        <InputBlock>
          <StyledLabel>Message:</StyledLabel>
          <MessageInput type="text" name="message" placeholder="Your message" />
        </InputBlock>
        <SubmitBtn type="submit">
          <BtnText>Send</BtnText>
          <ArrowRight />
        </SubmitBtn>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
