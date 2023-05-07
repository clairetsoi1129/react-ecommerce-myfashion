export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'action',
            title: 'Action',
            type: 'string',
        },
        {
            name: 'filter',
            title: 'Filter',
            type: 'string',
        }
    ],
  };