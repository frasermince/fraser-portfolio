module.exports = `
  {
    github {
      user(login: "frasermince") {
        pinnedItems(
          first: 8
        ) {
          edges {
            node {
              __typename
              ... on Repository{
                id
                name
                url
                description
                stargazers {
                  totalCount
                }
                forkCount
              }
            }
          }
        }
      }
    }
  }
`;
