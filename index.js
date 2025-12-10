const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

const githubdata = {
  "login": "Fenil-1",
  "id": 179408243,
  "node_id": "U_kgDOCrGNcw",
  "avatar_url": "https://avatars.githubusercontent.com/u/179408243?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Fenil-1",
  "html_url": "https://github.com/Fenil-1",
  "followers_url": "https://api.github.com/users/Fenil-1/followers",
  "following_url": "https://api.github.com/users/Fenil-1/following{/other_user}",
  "gists_url": "https://api.github.com/users/Fenil-1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Fenil-1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Fenil-1/subscriptions",
  "organizations_url": "https://api.github.com/users/Fenil-1/orgs",
  "repos_url": "https://api.github.com/users/Fenil-1/repos",
  "events_url": "https://api.github.com/users/Fenil-1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Fenil-1/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Fenil",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 27,
  "public_gists": 0,
  "followers": 3,
  "following": 5,
  "created_at": "2024-08-25T19:41:34Z",
  "updated_at": "2025-11-13T16:59:42Z"
}
app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.listen(port , ()=>{
    console.log(`Listening on port ${port}`);
    
})

app.get('/login' , (req,res)=>{
 res.send("login hai bhaiya!!")
})
app.get('/homepage',(req,res)=>{
    res.send(`<h1>hogaya jii!!</h1>`)
})
app.get('/youtube',(req,res)=>{
 res.send(`<p><href='www.youtube.com'/>CLICK HERE</p>`)
})

app.get('/github' , (req,res)=>{
    res.json(githubdata)
})