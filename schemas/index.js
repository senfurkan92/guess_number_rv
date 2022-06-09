import * as yup from 'yup';

export const inputSchema = yup.object().shape({
    number: yup.number().required().positive().integer().max(99)
})
