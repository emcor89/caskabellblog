import { request, gql } from 'graphql-request';

const WP_GRAPHQL_URL = 'https://linen-gnat-102975.hostingersite.com/graphql';

export async function getAllPosts() {
    const query = gql`
    query GetLatestPosts {
      posts {
        nodes {
          id
          title
          slug
          date
          content
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;
    const data = await request(WP_GRAPHQL_URL, query);
    return data?.posts?.nodes;
}
export async function getAllQuitoPosts() {
    const query = gql`
        query NewQuery {
            posts(where: {categoryName: "Quito"}) {
                edges {
                node {
                    id
                    title
                    content
                    featuredImage{
                    node{
                        sourceUrl
                    }
                    }
                }
                }
            }
        }
    `;
    const data = await request(WP_GRAPHQL_URL, query);
    return data?.posts?.nodes;
}
export async function getPostBySlug(slug) {
    const query = gql`
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `;
    const variables = { id: slug };
    const data = await request(WP_GRAPHQL_URL, query, variables);
    return data?.post;
}