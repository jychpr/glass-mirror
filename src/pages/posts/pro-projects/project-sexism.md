---
layout: ../../../layouts/MarkdownLayout.astro
title: 'Tweets Sexism Detection (NYCU-NLP)'
pubDate: 2026-01-17
description: 'Empirical study on Annotator-Aware Two-Stage Pipelines using LLMs'
author: 'Joy Chrissetyo Prajogo'
tags: ["project"]
image:
    url: '/images/pro-projects-content/nlp-project.webp'
    alt: 'NLP Pipeline Diagram'
---

<div class="architecture-grid">
  <img src="/images/pro-projects-content/nlp-project-1.webp" alt="Data Preprocessing Flow" />
  <img src="/images/pro-projects-content/nlp-project-2.webp" alt="Annotator-Aware Two-Stage Pipeline System with Data Postprocessing" />
  <img src="/images/pro-projects-content/nlp-project-3.webp" alt="Simplified High-Level Diagram of Transformer-Based Approach" />
  <img src="/images/pro-projects-content/nlp-proejct-4.webp" alt="Simplified High-Level Diagram of LLM-Based System" />
</div>

<style>
  .architecture-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .architecture-grid img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  /* Stacks images vertically on mobile screens */
  @media (max-width: 600px) {
    .architecture-grid { grid-template-columns: 1fr; }
  }
</style>

## Overview
This project was an empirical study of three system implementations for sexism detection in tweets, submitted at worksing notes of **CLEF 2025** (Madrid, Spain). We focused on an "Annotator-Aware" approach, realizing that sexism is often subjective and depends on who is labeling the data.

## Methodologies
We implemented and compared three distinct architectures:
1.  **Fine-tuned Transformer-based:** Utilized early and late fusion techniques.
2.  **Zero-shot Auto-Regressive (AR) LLM:** Leveraging large language models without specific training examples.
3.  **Zero-shot Diffusion LLM:** A novel approach using diffusion large language models for text classification.

## Key Features
* **Two-Stage Pipeline:** All systems followed a strict two-stage process to filter and then classify content.
* **Bilingual Fusion:** We combined original tweets with cross-translated versions to capture linguistic nuances.
* **Demographic Integration:** Uniquely integrated annotator demographics into the model to account for bias.

## Tech Stack
* **Languages:** Python
* **Frameworks:** PyTorch
* **Models:** Transformers, LLMs

## Publication
* **Title:** *NYCU-NLP at EXIST 2025: An Empirical Study of Annotator-Aware Two-Stage Pipeline for Sexism Detection in Tweets*
* **Authors:** Joy Chrissetyo Prajogo, Lung-Hao Lee, and Hsien-I Lin
* **Conference:** Working Notes of CLEF 2025, Vol 4038, pp. 2119-2132.