import { emailRegex, nameRegex, phoneRegex } from 'utils/regex';
import * as yup from 'yup';

export const formSchema = yup.object().shape({
    fullname: yup
        .string()
        .min(2, 'Wrong Fullname')
        .max(30, 'Wrong Fullname')        
        .matches(nameRegex, 'Only alphabetic characters are allowed')
        .required('Required'),
    email: yup
        .string()
        .matches(emailRegex, `For example: user@gmail.com`)
        .max(50, 'Wrong Email')
        .min(10, 'Wrong Email')
        .email('Wrong Email')
        .required('Required'),
    phone: yup
        .string()
        .min(12, 'Wrong Phone')
        .max(13, 'Wrong Phone')
        .matches(phoneRegex, 'Phone should be in format +380441234567')
        .required('Required'),
});