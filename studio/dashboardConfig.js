export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
    //   }
    // },
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
                  buildHookId: '636a23978307d42a33d8d0ed',
                  title: 'Sanity Studio',
                  name: 'fresh-air-production-studio',
                  apiId: '95c25589-c25a-4b95-937d-463f1c851417'
                },
                {
                  buildHookId: '636a2397d0a90e1b7ebcc81f',
                  title: 'Fresh Air Website',
                  name: 'fresh-air-production',
                  apiId: 'adfc1430-1339-4906-a105-4044baf3f9d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomwrankmore/Fresh-Air-Production',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://fresh-air-production.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
