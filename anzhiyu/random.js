var posts=["posts/d0000001.html","posts/a0060000.html","posts/a0060001.html","posts/a0060003.html","posts/a0060005.html","posts/a0060002.html","posts/a0060007.html","posts/a0090000.html","posts/a0060008.html","posts/a0090002.html","posts/a0090003.html","posts/a0090001.html","posts/a0090004.html","posts/a0090005.html","posts/a0090006.html","posts/a0090008.html","posts/a0090007.html","posts/c0010000.html","posts/c0010001.html","posts/c0010002.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};