import path from 'path'
import StudioHandler from '@prisma/studio-vercel'

// Forward the Request & Response objects to `StudioHandler`. You should configure YOUR `schemaPath` here.
module.exports = StudioHandler({
  schemaPath: path.resolve(__dirname, "../../prisma/schema.prisma")
})
