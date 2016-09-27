# React Static Site

For now, this is just me experimenting with using React to build a static site.

I'd like to port my blog across to a React static site, and I'd like to learn
more about universal React rendering. Depending on the outcome of this
experimentation, I'd like to turn this into a reusable system. A bit like
[Gatsby](https://github.com/gatsbyjs/gatsby).

## Aims

- Every page should be built to a static HTML file.
- Content should be accessible with no JS.
- If and when JS runs client-side, it should enable partial page transitions.
- Themes created using React components.
- Avoid CSS preprocessing in favour of a *CSS in JS* approach (currently [Aphrodite](https://github.com/Khan/aphrodite)).
- CSS should work with no JS.
- It should be possible to author pages using:
  - Markdown.
  - React components.
- Provide a hot reloading experience for development and content editing.
- Use Browserify instead of Webpack.