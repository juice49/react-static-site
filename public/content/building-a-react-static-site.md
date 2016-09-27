---
title: Problems encountered building a static site with React
date: '2016-09-24T20:03:45.084Z' # find a way to not turn into date obj
tags:
  - react
  - static
---
## Render to string is not async
Data fetching has to be handled outside of the component as well.

## Double rendering
The client rendered doesn't know if it is attaching to a prerendered version
of itself, meaning it fetches data again when it mounts.

## Links in content are not automatically treated as Router links


## Serving a SPA and static pages
[micro-list](https://npmjs.com/micro-list)
[st](https://npmjs.com/st)