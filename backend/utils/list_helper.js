const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  let highestLikes = 0;
  let favorite = null;

  for (const blog of blogs) {
    if (blog.likes > highestLikes) {
      highestLikes = blog.likes;
      favorite = blog;
    }
  }

  return favorite;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}