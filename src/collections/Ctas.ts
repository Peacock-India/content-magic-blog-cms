/* eslint-disable prettier/prettier */
import type { CollectionConfig } from 'payload/types'

import validateURL from '../utilities/validateURL'

const Ctas: CollectionConfig = {
  slug: 'ctas',
  auth: false,
  fields: [
    {
      name: 'cta_icon',
      type: 'upload',
      label: 'cta Icon',
      relationTo: 'images',
      required: true,
    },
    {
      name: 'cta_text',
      type: 'text',
      label: 'Cta Text',
      required: true,
    },
    {
      name: 'cta_link_text',
      label: 'Cta Link Text',
      type: 'text',
      required: true,
    },
    {
      name: 'cta_btn_text',
      label: 'Cta Button Text',
      type: 'text',
      required: true,
    },
    {
      name: 'cta_link',
      label: 'Cta Link',
      type: 'text',
      validate: validateURL,
    },
  ],
}

export default Ctas
