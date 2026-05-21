require("dotenv").config();
const express = require("express");

const app = express();

const port = 4000;
const githubData = {
  login: "anupamlearner",
  id: 131378894,
  node_id: "U_kgDOB9Suzg",
  avatar_url: "https://avatars.githubusercontent.com/u/131378894?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/anupamlearner",
  html_url: "https://github.com/anupamlearner",
  followers_url: "https://api.github.com/users/anupamlearner/followers",
  following_url: "https://api.github.com/users/anupamlearner/following{/other_user}",
  gists_url: "https://api.github.com/users/anupamlearner/gists{/gist_id}",
  starred_url: "https://api.github.com/users/anupamlearner/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/anupamlearner/subscriptions",
  organizations_url: "https://api.github.com/users/anupamlearner/orgs",
  repos_url: "https://api.github.com/users/anupamlearner/repos",
  events_url: "https://api.github.com/users/anupamlearner/events{/privacy}",
  received_events_url: "https://api.github.com/users/anupamlearner/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Learning MERN Stack apps. #MongoDB #ExpressJS #React #NodeJS",
  twitter_username: null,
  public_repos: 3,
  public_gists: 0,
  followers: 1,
  following: 0,
  created_at: "2023-04-20T14:33:29Z",
  updated_at: "2026-05-21T11:32:13Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("anupam@twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login @ chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
