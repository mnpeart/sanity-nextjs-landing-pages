export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '627abf754d31ab16e5eee1d6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pr288ykn',
                  apiId: '395b67df-cb23-49f7-ab3c-a7383037b276'
                },
                {
                  buildHookId: '627abf759bf7e91796cc5fc3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p4a6tt9v',
                  apiId: 'd97fa609-ddfa-42bc-ba5a-c1b7cf8bfc89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mnpeart/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p4a6tt9v.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
