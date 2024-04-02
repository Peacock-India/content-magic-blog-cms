import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { slateEditor } from '@payloadcms/richtext-slate'
import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'

import Authors from './collections/Authors'
import Blogs from './collections/Blogs'
import Ctas from './collections/Ctas'
import Images from './collections/Images'
import { Pages } from './collections/Pages'
import Users from './collections/Users'
import BeforeLogin from './components/BeforeLogin'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Pages, Images, Authors, Blogs, Ctas, Users],
  admin: {
    bundler: webpackBundler(),
    components: {
      beforeLogin: [BeforeLogin],
    },
  },
  editor: lexicalEditor({}),
  // graphQL: {
  //   schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  // },
  // db: postgresAdapter({
  //   pool: {
  //     connectionString: process.env.DATABASE_URI,
  //   },
  // }),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
