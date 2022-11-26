const form = document.getElementById('subscribe')
const modal = document.getElementById("modal")
const imageModal = document.getElementById("modal-image")
const closeButton = document.getElementById("close-button")
const closeButtonImage = document.getElementById("close-button-image")
let posts = []

const openModal = () => {
  modal.style.display = "block"
}

const closeModal = () => {
  modal.style.display = "none"
}

const openModalImage = () => {
  imageModal.style.display = "block"
}

const closeModalImage = () => {
  imageModal.style.display = "none"
}

closeButton.addEventListener("click", closeModal)
closeButtonImage.addEventListener("click", closeModalImage)

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal()
  }
  if (event.target === imageModal) {
    closeModalImage()
  }
})

const zoomImage = (image) => {
  const imageElement = document.getElementById('image-modal')
  imageElement.src = image
  openModalImage()
}

const renderPosts = (posts) => {
  const postsContent = document.getElementById('posts')
  postsContent.innerHTML = ''

  posts.forEach((post) => {
    postsContent.innerHTML = postsContent.innerHTML + `
      <div class="card">
        <div class="image" onclick="zoomImage('${post.image}')">
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
const getPosts = async () =>{  
  const apiResponse = await fetch('http://localhost:3000/posts?_sort=id&_order=desc')
  const posts = await apiResponse.json()
  renderPosts(posts)
}

const savePost = async (post) => {
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
}

const addPost = async (post) => {
  await savePost(post)  
  getPosts()
  closeModal()  
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




