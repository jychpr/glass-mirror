---
layout: ../../../layouts/MarkdownLayout.astro
title: 'Creating Personal Website'
pubDate: 2026-01-16
description: 'My journey creating my own personal website'
author: 'Joy Chrissetyo Prajogo'
tags: ["blog"]
image:
    url: '/images/pro-projects-content/website-glass-mirror-project.webp'
    alt: 'Website Glass Mirror Homepage'
---

## Why I did it

I'd been wanting to create my own personal website for a while. I had the vision in mind, but I didn't make it real back then. Now, I have done it.

I used an AI assistant to help me code and build the website, but the architectural decisions and the integration of how the website is shaped were on me. I took three personal websites as inspiration and made them the base layout for certain pages on my own site. From there, I guided the AI assistant to pivot the website into what I had in my vision.

## The Tech Stack

For the tech stack selection, I chose Astro because the AI assistant recommended it — but also because with plain HTML it would be tough to maintain or update if I wanted to make changes later. Astro also supports markdown files natively, which was a plus.

Then I deployed it to GitHub Pages with GitHub Actions for hosting, because it's free to use and I can update or add content whenever I want. I started on GitHub for trial-and-error purposes at the beginning, and since it was working to display, I just kept it. I use Cloudflare as the registrar and DNS only, because I wanted to have a custom domain name.

I chose raw CSS because I didn't need any advanced or complex design to manage. I wanted to keep it simple and neat.

During development, the AI assistant mostly helped with code and debugging things, while I kept directing it to pivot toward the website result that I wanted.

One thing I found kind of interesting — and had some trouble with — was setting up the print properties for visitors (or me) to save my resume/CV to their device. The output differs across browsers: on Chrome, the resume comes out as exactly 2 pages, but on Brave or others, it can come out as 3 pages with an extra line of text disrupting on a single blank page. For this, I needed to test the export-to-PDF behavior across all of my devices — laptop, PC, mobile phones (iPhone and Android), and tablets like the iPad.

## What I learned

1. Vision is nothing without action.
2. I learned how to take the leap of faith to actually do something.
3. I re-learned the basics of website building — HTML, CSS, and especially the framework side of things.
4. Keep moving forward, no matter what.
5. Build first, no need for perfect — polish and improve it later. Time will do its part.

The site you're reading right now is the result of that.
