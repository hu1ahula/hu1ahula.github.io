var posts=["2024/12/16/hello-world/","2024/12/16/leetcode-list/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };