let posts = []

const getPosts = async () =>{  
  const apiResponse = await fetch('http://localhost:3000/posts')
  const posts = await apiResponse.json()
  console.log(posts)
}

const addPost = async () => {
  await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "title": "Estamos mortos. É um golpe muito duro, diz Messi após derrota da Argentina",
          "author": "Fulano",
          "image": "https://s2.glbimg.com/OhOyaoXDxX_64xtmqQQOONxz8ag=/0x0:4623x3284/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/Y/4/SIYzzVTj2A8UVhcso0Hg/2022-11-22t114835z-132521025-up1eibm0wsxbj-rtrmadp-3-soccer-worldcup-arg-sau-report.jpg",
          "text": "O atacante Lionel Messi, da Argentina, usou palavras fortes para expressar a tristeza pela derrota por 2 a 1 para a Arábia Saudita, nesta terça-feira, na abertura do Grupo C da Copa do Mundo..."
      })
  });       
}
