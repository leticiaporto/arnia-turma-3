const form = document.getElementById('subscribe')
let posts = []

const getPosts = async () =>{  
  const apiResponse = await fetch('http://localhost:3000/posts')
  const posts = await apiResponse.json()
  const content = document.getElementById('content')

  posts.forEach((post) => {
    content.innerHTML = content.innerHTML + `
      <div class="card">
        <div class="image">
          <img src="${post.image}" />
        </div>
        <div class="card-content">
          <div class="card-title">
            ${post.title}
          </div>
          <div class="card-text">
            ${post.text}
          </div>
        </div>
      </div>
    `
  })
}

const addPost = async (post) => {
  await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "title": post.title,
          "author": post.author,
          "image": post.image,
          "text": post.text
      })
  });    
  window.open('index.html', '_self')   
}

if(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
  
    const title = form.elements['title'].value
    const author = form.elements['author'].value
    const image = form.elements['image'].value
    const text = form.elements['text'].value
  
    addPost({ title, author, image, text })  
  })
}




