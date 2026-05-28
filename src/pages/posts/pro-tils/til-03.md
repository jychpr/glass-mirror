---
layout: ../../../layouts/MarkdownLayout.astro
title: 'Carrying context across Claude sessions with HANDOFF.md'
pubDate: 2026-05-27
description: 'A simple markdown file that lets Claude pick up where the last session left off — useful for both Claude.ai projects and Claude Code.'
author: 'Joy Chrissetyo Prajogo'
tags: ["til"]
---

## Story
Two things happened recently that made me realize I had a context problem when working with Claude.

First, in a Claude.ai project, I was deep in a conversation discussing my proposed method. After a while I noticed that a single reply from Claude was already consuming roughly 25% of the session quota — meaning a long working chat would run out fast, and starting a new one would mean re-explaining everything from scratch.

Second, in Claude Code, I had been told that creating a new session after each major task is good practice. But every new session meant Claude had to read through the project again to pick up the context, and Claude Code's context window can only absorb so much in one go.

Then, while scrolling Instagram, a reel came up about creating a `HANDOFF.md` file for Claude Code — a markdown file that captures project context: what has been done, what is next, what still needs fixing, and so on. I tried it on both Claude Code and Claude.ai. In both cases, dropping a `HANDOFF.md` at the start of a new session compressed the re-onboarding from many back-and-forth turns into a single message.

## What I put in mine
On Claude Code, I drive everything with two prompts. At the end of a session:

```
Before we end this session, write a HANDOFF.md (or update it if one already exists) that captures:
- the goal we're working toward
- current state of the code
- files you're actively editing
- files added
- everything you've tried that failed
- the next step you'd take

From all of that, add a new section called Changelog with a summary of this session.
Don't delete it and don't touch it unless told. Only edit the other parts, not the
Changelog. Edit, update, or delete the Changelog only if commanded to.
```

Then, at the start of the next session:

```
Read HANDOFF.md and pick up from exactly where it left off.
```

On Claude.ai I don't use a fixed prompt — I just ask Claude to summarize the project conversation into a `HANDOFF.md` with the sections I care about:

- Project goal, framing, etc.
- General rules
- Project problems, metrics
- Project methodologies, constraints, structure, etc.
- Current experiment
- What is done
- What is blocked or unclear
- What is the next step to do
- Recaps
- Preferences
- Next-conversation to-do list

## The Takeaway
Don't rely on Claude — or any LLM tool — to carry context across session boundaries. Maintain it yourself in a `HANDOFF.md`. The few minutes it takes to update one at the end of a session save many more when you start the next one.
