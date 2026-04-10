---
layout: ../../../layouts/MarkdownLayout.astro
title: 'Watch out for naming conventions in CV papers (The DINO Collision)'
pubDate: 2026-02-17
description: 'Clarifying the difference between Meta''s DINO and IDEA Research''s DINO.'
author: 'Joy Chrissetyo Prajogo'
tags: ["til"]
image:
    url: '/images/testdefault.webp'
    alt: 'TILs Background'
---

I was reviewing literature today and hit a classic computer vision naming collision. 

If a colleague or collaborator sends you a paper mentioning "DINO", you must immediately clarify which architecture they mean, as they solve entirely different problems:

1. **DINO (Object Detection):** [*DINO: DETR with Improved DeNoising Anchor Boxes for End-to-End Object Detection*](https://arxiv.org/abs/2203.03605). This is IDEA Research's transformer-based object detector.
2. **DINO (Self-Supervised Learning):** [*Emerging Properties in Self-Supervised Vision Transformers*](https://arxiv.org/abs/2104.14294). This is Meta AI's self-supervised representation learning paradigm for Vision Transformers (ViTs).

One is an object detector. The other is a method for training foundational vision models without labels. 

**The Takeaway:** Never assume architecture names are globally unique in AI. Always verify the arXiv link and the reference section before diving into a codebase or designing an integration.