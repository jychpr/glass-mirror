---
layout: ../../../layouts/MarkdownLayout.astro
title: 'Glass Mirror Website'
pubDate: 2026-01-16
description: 'A minimalist portfolio site built with Astro and raw CSS.'
author: 'Joy Chrissetyo Prajogo'
tags: ["project"]
image:
    url: '/images/pro-projects-content/website-glass-mirror-project.webp'
    alt: 'Website Glass Mirror Homepage'
---

## The Goal
To build a portfolio that forces me to learn web fundamentals: HTML, CSS, a modern framework, and shipping to production.

## Tech Stack
* **Framework**: Astro, with posts written in Markdown
* **Styling**: Raw CSS with CSS variables (light and dark mode)
* **Hosting**: GitHub Pages, deployed by GitHub Actions every time I merge a change
* **Domain**: Cloudflare (registrar and DNS)

## How I Built It
I designed the site and made the decisions; AI assistants wrote most of the code. I started with Google Gemini and now work with Claude Code.

The decisions that were mine:
* **The concept**: two sides on one domain. Pro for my work, Fun for everything else, with a switch in the header.
* **The layout**: I took three personal websites I liked as the base for different pages, then reshaped them into my own.
* **The stack**: Astro, which the AI suggested; I kept it because plain HTML would be painful to maintain and Astro supports Markdown natively. Raw CSS, because the design is simple. GitHub Pages, because it's free and updates every time I merge a change.

The hardest part was the CV and resume. Both are A4 pages you can save as a PDF straight from the browser, in English and Chinese, and the resume has to stay one page per language. Browsers print differently (Brave once pushed a stray line onto a third page), so I tested on my laptop, PC, iPhone, Android phone and iPad. Today both documents share one stylesheet, and every style change is checked by comparing the PDFs before and after.

The AI handled the code and the debugging. I directed it, tested the results, and decided what shipped. The longer story is in [Creating Personal Website](/posts/pro-blog/learning-astro/).