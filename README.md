# SDK PRO JS for creating posts & getPost
a basic fetching
## use this way
   
   ``` 
   import Typicode from '@chidaniel/sdk-pro-js'
   
   const client = new Typicode({
       apiKey: '12345'
   })

   client.getPosts().then(p => {
       console.log(p)
   })
   
   client.getPostById(1).then(p => {
       console.log(p)
   })
   
   client.createPost({
       title: "Daniel",
       body: "hello",
       userId: 1
   }).then(p =>{
       //pass the function here
       console.log('new posts created)
   })
   ```
  
 