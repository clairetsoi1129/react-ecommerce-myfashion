export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Id',
        type: 'number',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'longDescription',
        title: 'Long Description',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      }
    ]
  }