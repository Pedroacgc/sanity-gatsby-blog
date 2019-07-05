export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1f86206ea3dab4d9c20bc1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-amo71set',
                  apiId: 'ba896b0c-f85a-4d33-9552-2167fa01924f'
                },
                {
                  buildHookId: '5d1f86201feb050b5dc26aa0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-trpjsenq',
                  apiId: '73b71775-badc-47be-9e3f-e26e7ea623b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pedroacgc/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-trpjsenq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
