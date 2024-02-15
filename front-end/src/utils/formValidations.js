import { z } from "zod"

/* File where potentially will add form validations using Zod*/
const CreateAccountSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(3)
      .max(20)
  });