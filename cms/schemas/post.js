export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en', 
          type: 'string',
          title: 'English'
        },
        {
          name: 'fr',
          type: 'string',
          title: 'French'
        },
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          type: 'text',
          title: 'English'
        },
        {
          name: 'fr',
          type: 'text',
          title: 'French'
        },
      ]
    },
  ]
}
