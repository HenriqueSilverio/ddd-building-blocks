/* eslint-disable no-console */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.author.createMany({
    data: [{
      uuid: '3dc6ccdd-7911-43c9-b651-5367a813940b',
      name: 'Bertrand Meyer',
    }, {
      uuid: 'c02233cf-94ae-4143-a64d-6a3a51c732e4',
      name: 'Ivar Jacobson',
    }, {
      uuid: '1c61eaf8-52e5-4689-859a-878e5bcb5d10',
      name: 'Alistair Cockburn',
    }],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
