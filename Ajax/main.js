// Make a request u need XMLHttpRequest
//Step-1

const xhr = new XMLHttpRequest()
console.log('The Ready state at Point 1 is: ${xhr.readyState}');
const url = 'https://api.github.com/users'

// Step-2
 xhr.open('GET', url)

 // Step-3

 xhr.onreadystatechange = () => {
     // Step-4

     if(xhr.readyState == 4 && xhr.status == 200) {
         // Step-5
        
         const response = xhr.responseText

         console.log(response[0].login)

         const responseObject = JSON.parse(response)
         console.log(responseObject[0].login)
         
        // Get div of HTML
         const container = document.querySelector('#main')

         for(let i = 0; i < 5; i++)
         {
             const image = document.createElement('img')
             image.setAttribute('src', responseObject[i].avatar_url)

             const heading = document.createElement('h3')
             heading.textContent = 'User ${i+1} is : ${responseObject[i].login}'
            
             const rule = document.createElement('hr')

             container.appendChild(image)
             container.appendChild(heading)
             container.appendChild(rule)
         } 
         console.log(response)
     }
 }

 // Step-5 
 xhr.send()