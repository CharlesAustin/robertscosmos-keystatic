import { config, fields, collection, singleton } from '@keystatic/core';
import React from 'react';
export default config({
  storage: {
    kind: 'local',
    /* repo: {
      owner: 'CharlesAustin',
      name: 'robertscosmos-keystatic'
    } */
  },
  ui: {
    brand: {
      name: 'Robert\'s Cosmos',
      mark: ({ colorScheme }) => {
        let path = colorScheme === 'dark'
            ? `//127.0.0.1:4321/src/assets/images/logo-only-fill-white.svg`
            : `//127.0.0.1:4321/src/assets/images/logo-only-fill-dark.svg`;
        return React.createElement('img', { src: path, height: 24});
      },
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published date'}),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/posts',
            publicPath: '../../assets/images/posts/',
          },
        }),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: 'Homepage',
      schema: {}
    }),
  }
});
