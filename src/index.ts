/* eslint-disable no-console */

import { PrismaClient } from '@prisma/client'

import Author from './Demo/Author'
import AuthorRepository from './Demo/AuthorRepository'

const prisma = new PrismaClient()

async function main() {
  const repository = new AuthorRepository(prisma)

  const identity = await repository.nextIdentity()
  const entity = new Author(identity, { name: 'Martin Fowler' })

  await repository.add(entity)

  console.log(entity.toJSON())
  console.log(`Saved ${entity.props.name} to database!`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
