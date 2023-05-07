/* 
* 1. Create a Post api on the server side
* 2. Client side send data via post
* 3. set fetch method inside the fetch options parameter e.g ====> fetch('resourse/url' , options);
* 4. options parameter in fetch will have 3 things: method: 'POST/GET'
* 5. options will have headers: 'content-type' : 'application/json'
* 6. options will have body(dont forget to JSON.stringify data in body):
*   body: JSON.stringify(dataName)
* 7. On the server side: DON'T forget to use express.json() middleware

*/