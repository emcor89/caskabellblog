import { gql } from 'graphql-request';

const WP_GRAPHQL_URL = 'https://linen-gnat-102975.hostingersite.com/graphql';


async function getAllPosts() {
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
async function getAllQuitoPosts() {
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

async function getPostInfo(slug) {
    const WP_GRAPHQL_URL = 'https://linen-gnat-102975.hostingersite.com/graphql';
    const query = `
        query GetPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            title
            content
            date
            author {
            node {
                name
            }
            }
            featuredImage {
            node {
                sourceUrl
            }
            }
        }
        }
        `;

    const response = await fetch(WP_GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { slug } })
    });

    const json = await response.json();
    const post = json.data.post;
    return post
}

export { getPostInfo as a, getAllPosts as b, getAllQuitoPosts as g };
