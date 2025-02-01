import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const getPrisma = () => {
  const prisma = new PrismaClient({
    datasourceUrl: "<url here>"
    ,
  }).$extends(withAccelerate())
  return prisma
}