---
layout: ../../layouts/MarkdownLayout.astro
title: 'Tweets Sexism Detection (NYCU-NLP)'
pubDate: 2025-09-12
description: 'Empirical study on Annotator-Aware Two-Stage Pipelines using LLMs'
author: 'Joy Chrissetyo'
tags: ["project"]
image:
    url: '/glass-mirror/images/project-content/nlp-project.png'
    alt: 'NLP Pipeline Diagram'
---

### Overview
This project was an empirical study of three system implementations for sexism detection in tweets, presented at **CLEF 2025** (Madrid, Spain). We focused on an "Annotator-Aware" approach, realizing that sexism is often subjective and depends on who is labeling the data.

### Methodologies
We implemented and compared three distinct architectures:
1.  **Fine-tuned Transformer-based:** Utilized early and late fusion techniques.
2.  **Zero-shot Auto-Regressive (AR) LLM:** Leveraging large language models without specific training examples.
3.  **Zero-shot Diffusion LLM:** A novel approach using diffusion models for text generation/classification.

### Key Features
* **Two-Stage Pipeline:** All systems followed a strict two-stage process to filter and then classify content.
* **Bilingual Fusion:** We combined original tweets with cross-translated versions to capture linguistic nuances.
* **Demographic Integration:** Uniquely integrated annotator demographics into the model to account for bias.

### Tech Stack
* **Languages:** Python
* **Frameworks:** PyTorch
* **Models:** Transformers, LLMs

### Publication
* **Title:** *NYCU-NLP at EXIST 2025: An Empirical Study of Annotator-Aware Two-Stage Pipeline for Sexism Detection in Tweets*
* **Authors:** Joy Chrissetyo Prajogo, Lung-Hao Lee, and Hsien-I Lin
* **Conference:** Working Notes of CLEF 2025, Vol 4038, pp. 2119-2132.