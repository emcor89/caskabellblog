import { request, gql } from 'graphql-request';

const WP_GRAPHQL_URL = 'https://linen-gnat-102975.hostingersite.com/graphql';


export async function getAllPosts() {
    const query = `
        query GetPosts {
            posts {
            nodes {
                title
                slug
                excerpt
                date
                author {
                node {
                    name
                }
                }
            }
            }
        }
        `;

    const response = await fetch(WP_GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    });
    const json = await response.json();
    const posts = json.data.posts.nodes;
    return posts
}
export async function getAllQuitoPosts() {
    const query = gql`
        query LoadQuitoPost {
            posts(where: {categoryName: "Quito"}) {
                nodes {
                author {
                    node {
                    name
                    }
                }
                categories {
                    nodes {
                    name
                    }
                }
                content(format: RENDERED)
                slug
                title
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                }
            }
        }
    `;
    const response = await fetch(WP_GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    });
    const json = await response.json();
    const posts = json.data.posts.nodes;
    return posts
}