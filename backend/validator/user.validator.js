import { z } from "zod";

export const Registervalidator = z.object({
    emailId: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    username: z
        .string({ required_error: "username is required" })
        .trim()
        .min(5, { message: "username must be atlist 4 character " })
        .max(20, { message: "username name can't be above 20 character" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least of 6 characters" })
        .max(1024, { message: "Password can't be greater than 1024 characters" }),
    mobile: z
        .number({ required_error: "mobile no required" })
        .min(10, { message: "mobile no at list 10 digit" })
        .max(20, { message: "mobile no can't above 20 digits" })

})

export const loginvalidator = z.object({
    emailId: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least of 6 characters" })
        .max(1024, { message: "Password can't be greater than 1024 characters" }),
    mobile: z
        .number({ required_error: "mobile no required" })
        .min(10, { message: "mobile no at list 10 digit" })
        .max(20, { message: "mobile no can't above 20 digits" })

})