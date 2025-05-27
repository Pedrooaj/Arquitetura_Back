import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: process.env.PORT as string,
    SUPABASE_URL: process.env.SUPABASE_URL as string,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY as string
}