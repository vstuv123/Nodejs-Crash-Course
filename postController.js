const posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' }
]

const getPosts = () => posts
const getPostsLength = () => posts.length;

export { getPosts as default, getPostsLength };