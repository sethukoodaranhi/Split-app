import * as yup from "yup";

const splitSchema = yup.object({
    amount: yup.number().typeError("Amount is required").required("Amount is required").positive("Amount must be greater than 0"),
    splitType: yup.string().required("Split type is required"),
    users: yup.array().when("splitType", {
        is: (val) => val !== "equal",
        then: (schema) => schema.of(yup.object().shape({ id: yup.number().required(), value: yup.number().nullable() })).min(1, "Select at least one user").required("Users are required"),
        otherwise: (schema) => schema.of(yup.object().shape({ id: yup.number().required(), value: yup.number().nullable() }))
    })
});



export default splitSchema;
