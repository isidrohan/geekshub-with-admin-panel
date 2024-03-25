const { z } = require("zod");

// creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least of 3 character" })
    .max(255, { message: "name must not be more than 255 characters" }),
    
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email must be at least of 3 character" })
    .max(255, { message: "email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be at least of 10 character" })
    .max(20, { message: "phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(6, { message: "password must be at least of 6 character" })
    .max(1000, { message: "password must not be more than 1000 characters" }),

});

module.exports = signupSchema;
