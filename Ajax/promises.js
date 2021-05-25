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
//Promises
function createPost(post)
{   
    return new Promise((resolve, reject) => {
        setTimeout( () => {
             
            posts.push(post)

            const error = false

            if(!error) {
                resolve()
            } else {
                reject('Error: Something is wrong!')
            }
        }, 5000)
    })
   
}
 createPost({title: 'Post Three', body: 'This is Post Three'})
 .then(getPosts).catch(err => console.log(err))

getPosts()