const {z} = require("zod");

const loginSchema = z.object({
    email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email must be at least of 3 character" })
    .max(255, { message: "email must not be more than 255 characters" }),

    password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(6, { message: "password must be at least of 6 character" })
    .max(1000, { message: "password must not be more than 1000 characters" })
})

module.exports = loginSchema;