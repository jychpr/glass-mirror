---
layout: ../../layouts/MarkdownLayout.astro
title: 'Robotic Generative AI 3-Cup Game'
pubDate: 2026-01-18
description: 'Vision system for a robotic game using YOLOv7 and SORT tracking.'
author: 'Joy Chrissetyo Prajogo'
tags: ["project"]
image:
    url: '/images/project-content/cup-game-robot.png'
    alt: 'Robotic Arm and Cups'
---

### Overview
Developed the vision system for a "3-Cup and Ball" game played by a robot. This project was showcased at **Intelligent Asia 2024** in Taipei, within the National Science and Technology Council booth.

### The Vision System
The core challenge was tracking a ball hidden under moving cups.
1.  **Detection:** Utilized **YOLOv7** to detect the cups and the ball in real-time.
2.  **Tracking:** Implemented the **SORT algorithm** (Simple Online and Realtime Tracking) to maintain object identity across frames.
3.  **Logic:** Combined visual tracking with a custom algorithm to predict which cup contained the ball after shuffling.

### Impact
This system demonstrated effective Human-Robotic Collaboration (HRC) by allowing a robot to interact dynamically with human players in a game of chance and perception.

### Publication
* **Title:** *A Case of Cups and a Ball: Utilizing Generative Artificial Intelligence for Human-robotic Collaboration in Task Execution*
* **Conference:** 2024 International Automatic Control Conference (CACS), Taoyuan, Taiwan.
* **DOI:** [10.1109/CACS63404.2024.10773301](https://doi.org/10.1109/CACS63404.2024.10773301)