var posts=["posts/d0010001.html","posts/a0090000.html","posts/a0090001.html","posts/a0090002.html","posts/a0090003.html","posts/a0090004.html","posts/a0090005.html","posts/a0090007.html","posts/a0090006.html","posts/c0010000.html","posts/a0090008.html","posts/a0090009.html","posts/c0010001.html","posts/c0010002.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};