import { number } from "prop-types"

export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name:'serviceType',
        title:'Service type',
        type: 'string',
        options:{
            list: [
                {value:'Nail care', title:'Nail care'},
                {value:'Paraffin', title:'Paraffin'},
                {value:'Massage', title:'Massage'},
                {value:'Makeup', title:'Makeup'},
                {value:'Skincare', title:'Skincare'},
                {value:'Eyelashes and Brows', title:'Eyelashes and Brows'},
                {value:'Permanent Makeup', title:'Permanent Makeup'},
                {value:'Waxing', title:'Waxing'},
                {value:'Threading', title:'Threading'},
                {value:'Hair Care', title:'Hair Care'},
            ]
        },
    },
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name'
      },
    },
  }
  