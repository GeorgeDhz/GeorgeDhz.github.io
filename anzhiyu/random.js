var posts=["posts/demo0000.html","posts/a0090000.html","posts/c0010000.html","posts/a0090003.html","posts/c0010002.html","posts/c0010001.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};