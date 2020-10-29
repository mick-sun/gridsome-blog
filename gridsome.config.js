// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: `gridsome-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: '4e4ddbb99a53daea71b5abde5ba9a6f0fe0840b6',

        // GraphQLquery: defaults to a search query
        graphQLQuery: `
          query ($author: String = "", $last: Int = 10) {
            user(login: $author) {
              gists(last: 10) {
                nodes {
                  id
                  description
                  updatedAt
                  pushedAt
                  files {
                    text
                    name
                  }
                }
              }
              followers(last: $last) {
                totalCount
                edges {
                  cursor
                  node {
                    bio
                    company
                    name
                    url
                    avatarUrl
                  }
                }
              }
              repositories(last: 10) {
                nodes {
                  name
                  url
                  updatedAt
                  description
                  stargazerCount
                  forkCount
                  watchers {
                    totalCount
                  }
                  languages(last: 10) {
                    nodes {
                      name
                      id
                      color
                    }
                  }
                  licenseInfo {
                    id
                    name
                  }
                }
              }
            }
          }          
        `,
        // variables: defaults to variables needed for a search query
        variables: {
          'author': 'GitHub-Laziji',
          'last': 12
        }
      }
    }
  ]
}
