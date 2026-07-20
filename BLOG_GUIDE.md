# How to Add New Blog Posts

Follow these simple steps to add new blog posts to your DentalYaatra website:

## Step 1: Create a Markdown File
1. Go to `src/blog_content/` directory
2. Create a new file with a descriptive slug as the filename, e.g., `my-new-blog-post.md`
3. Write your blog content using Markdown syntax

## Step 2: Add Blog to Data File
1. Open `src/data/blogs.js`
2. Import your new markdown file at the top:
   ```javascript
   import myNewBlogPost from '../blog_content/my-new-blog-post.md?raw'
   ```
3. Add a new entry to the `blogs` array:
   ```javascript
   {
     slug: 'my-new-blog-post',
     title: getTitle(myNewBlogPost),
     excerpt: getExcerpt(myNewBlogPost),
     date: 'July 6, 2026',
     image: 'https://images.unsplash.com/your-image-url?w=600&h=400&fit=crop',
     content: myNewBlogPost
   }
   ```

## Step 3: That's It!
Your new blog post will automatically show up on:
- The Home page's "Latest from our Blog" section
- The /blogs page
- The individual blog post page at /blogs/my-new-blog-post

## Markdown Tips
- Use `#` for main title
- Use `##` for section headings
- Use regular text for paragraphs
- You can add links, lists, and more with standard Markdown
