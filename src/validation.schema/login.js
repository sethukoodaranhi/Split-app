import * as yup from "yup";

const loginSchema = yup.object({
    name: yup.string().required("Username is required"),
    password: yup.string().required().min(5, "Minimum 5 characters required"),
   
}).required();
export default loginSchema;