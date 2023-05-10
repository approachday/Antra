function fetch(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response ? JSON.parse(xhr.response) : '');
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = function() {
      reject(xhr.statusText);
    };
    xhr.send(data ? JSON.stringify(data) : null);
  });
}
  
// GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST request
const newPost = { title: 'New post', body: 'This is the body of the new post', userId: 1 };
fetch('https://jsonplaceholder.typicode.com/posts', 'POST', newPost)
  .then(data => console.log(data))
  .catch(error => console.error(error));

// PUT request
const updatedPost = { id: 1, title: 'Updated post', body: 'This is the updated body of the post', userId: 1 };
fetch('https://jsonplaceholder.typicode.com/posts/1', 'PUT', updatedPost)
  .then(data => console.log(data))
  .catch(error => console.error(error));

// DELETE request
fetch('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')
  .then(() => console.log('Successfully deleted'))
  .catch(error => console.error(error));
