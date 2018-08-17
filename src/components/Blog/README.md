### MARKET Protocol - Blog
In this doc I'll highlight changes I made to shared files while creating the blog, explain how the CMS works, and suggest a blog deployment process.

### Changes to shared files
#### `./static.config.js`
I've added a function called `getBlogData` which imports two new node modules: `gray-matter` and `klaw`. This function walks through the `./src/blogPosts` directory and parses its markdown files into the format required by `<Blog />` and `<BlogPost />` React components. The function is invoked in `export.default.getRoutes`, with its return value being served to `/blog` and `/blog/post-title` for rendering.
#### `./src/components/Navbar.tsx`
This component's `componentDidMount` function has been updated so that any page whose pathname *includes* `/blog` will render a `<Navbar />` with `Blog` highlighted. Previously, only the `/blog` base route would render the highlighted `Blog` button.

### New files and directories
#### `./public/admin`
This directory contains two files, `config.yml` and `index.html`. The former contains Netlify CMS configuration code, and the latter renders the CMS at the `/admin` path.
#### `./public/uploads`
This is the destination directory for any media files uploaded during the blog post publication process. It is defined in `./public/admin/config.yml`.
#### `./src/blogPosts`
This is the destination directory for newly published posts, as defined in `./public/admin/config.yml`. This is the directory that is walked through by the `getBlogData` function in `./static.config.js`, and any markdown files in the folder will be rendered as blog posts in the frontend.

### How does Netlify CMS work?
An administrative dashboard [has been injected at the site's `/admin` path](/public/admin). Administrators can log into this dashboard with their GitHub accounts, however, those accounts must have full push access to the Git branch defined in the [Netlify config file](/public/admin/config.yml).

When an admin publishes a new post from the CMS dashboard, a markdown file is pushed to the specified Git repository/branch. That push can then be deployed for the post to appear on the live site.

All configuration is handled [here, in the Netlify config file](/public/admin/config.yml). A few key components of this file are:
- `backend`: This option defines which Git repo to push new posts to.
- `publish_mode`: This option defines how the CMS dashboard looks. It's currently set to `editorial_workflow`, which is a slightly more advanced version of the default dashboard. It includes a `Workflow` feature, which allots posts the status of `Draft`, `In Review`, or `Ready`. Only `Ready` posts can be published.
- `collections`: This option defines the types of content being created via the CMS Dashboard, including data fields, filename templates, and specifications of where to store published post files.

Read about the rest of Netlify's configuration options [here](https://www.netlifycms.org/docs/configuration-options/). If you want to change anything about how the CMS works, this is where to go.

### Suggested deployment process
I suggest you create a new branch called `blog`. You can keep this branch up to date with `production`, merging `blog` into `production` and redeploying the site whenever you'd like to publish a new post or set of posts.

If you find that you're using Netlify CMS really frequently, you may want to look into using Netlify to host the website in general. They have a few features that really streamline the post publication process, such as:
- Autodeploy, which automatically redeploys the site when a specified Git branch has been pushed to (i.e. you can publish a post and it will instantly be deployed to the live site)
- Identity, which lets bloggers log into your CMS dashboard without having a Github account
- Git Gateway, which lets bloggers who don't have access to your Git repo publish blog posts

For now, it seems like the current solution is sufficient!

Let me know if you have any questions about my code, or anything else! My email is `dev@bradysheridan.com`. I will happily respond even if you reach out long after the completion of this project.
