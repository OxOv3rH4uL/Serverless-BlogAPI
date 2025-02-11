import dotenv from "dotenv";

dotenv.config();

export const config = {
  databaseUrl: process.env.DATABASE_URL as string,
  secret: process.env.JWT_SECRET as string
};