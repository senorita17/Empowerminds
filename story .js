
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const blogLinks = document.querySelector('.blog-links');
    const latestBlog = document.querySelector('.blog-card');
    const contentTextarea = document.getElementById('content');
    const keywordList = document.querySelector('.keyword-list');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get values from the form
      const name = document.getElementById('name').value;
      const content = contentTextarea.value;

      // Create a new blog link
      const newBlogLink = document.createElement('li');
      newBlogLink.className = 'blog-link';
      newBlogLink.innerHTML = `<a href="#" class="blog-link">${name}</a>`;
      blogLinks.prepend(newBlogLink);

      // Create a new blog card
      const newBlogCard = document.createElement('div');
      newBlogCard.className = 'blog-card';
      newBlogCard.innerHTML = `<h2>${name}</h2><p>${content}</p>`;
      latestBlog.innerHTML = ''; // Clear the existing latest blog
      latestBlog.appendChild(newBlogCard);

      // Reset form values
      document.getElementById('name').value = '';
      contentTextarea.value = '';
    });

    // Handle adding keywords to the content
    keywordList.addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        const keyword = event.target.textContent.trim();
        contentTextarea.value += ` ${keyword}`;
      }
    });
  });

