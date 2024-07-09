const _ = require('lodash');

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

const mostBlogs = (blogs) => {
  const authors = _.countBy(blogs, 'author');
  const authorWithMostBlogs = _.maxBy(Object.keys(authors), author => authors[author]);
  return {
    author: authorWithMostBlogs,
    blogs: authors[authorWithMostBlogs]
  };
};

const mostLikes = (blogs) => {
  const authorsLikes = _.reduce(blogs, (result, blog) => {
    result[blog.author] = (result[blog.author] || 0) + blog.likes;
    return result;
  }, {});

  const authorWithMostLikes = _.maxBy(Object.keys(authorsLikes), author => authorsLikes[author]);

  return {
    author: authorWithMostLikes,
    likes: authorsLikes[authorWithMostLikes]
  };
};


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};