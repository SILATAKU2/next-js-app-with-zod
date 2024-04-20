import { z } from "zod";

//Zod schemas
export const signUpSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  email: z.string().email("Invalid email").trim(),
  ageGroup: z.enum(["adult", "child", "infant"]),
  address: z.string().trim().optional(),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
