import * as yup from 'yup';

//Min 6 character, 1 Uppercase letter, 1 lowercase, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const userSchema = yup.object().shape({
    username: yup.string().required('Vui lòng điền vào trường này!'),
    email: yup.string().email('Trường này phải là email').required(),
    password: yup.string().min(6, "Vui lòng điền ít nhất 6 ký tự").matches(passwordRules, { message: 'Mật khẩu gồm tối thiểu 1 chữ viết hoa và 1 chữ số ' }).required("Vui lòng nhập mật khẩu"),
    password_confirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp!')
        .required("Vui lòng nhập mật khẩu"),
});
