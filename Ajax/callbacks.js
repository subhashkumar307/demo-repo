
const posts = [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post Two', body: 'This is Post Two'}
]

function getPosts()
{
    setTimeout( () => {
        let output = ''
        posts.forEach( (post) => {
            output += `<li> ${post.body} </li>`
        })
        document.querySelector('#main').innerHTML = output
    }, 2000)
}

function createPost(post, callback)
{
    setTimeout( () => {
        posts.push(post)
        callback()
    }, 3000)
}

createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts)
getPosts()