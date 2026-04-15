---
layout: ../../../layouts/MarkdownLayout.astro
title: 'Robotic Generative AI 3-Cup Game'
pubDate: 2026-01-16
description: 'Vision system for a robotic game using YOLOv7 and SORT tracking.'
author: 'Joy Chrissetyo Prajogo'
tags: ["project"]
image:
    url: '/images/pro-projects-content/cup-game-robot.webp'
    alt: 'Robotic Arm and Cups'
---

<div class="video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/y46Yi_ZzwsA"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

<style>
  /* Forces the video to be perfectly responsive on desktop and mobile */
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
    margin-bottom: 2rem;
    border-radius: 8px; /* Optional: smooths the corners */
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Optional: adds a subtle professional shadow */
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

## Overview
Developed the vision system for a "3-Cup and Ball" game played by a robot. This project was showcased at **Intelligent Asia 2024** in Taipei, within the National Science and Technology Council booth.

The core challenge was tracking a ball hidden under moving cups.
1.  **Detection:** Utilized **YOLOv7** to detect the cups and the ball in real-time.
2.  **Tracking:** Implemented the **SORT algorithm** (Simple Online and Realtime Tracking) to maintain object identity across frames.
3.  **Logic:** Combined visual tracking with a custom algorithm to predict which cup contained the ball after shuffling.

This system demonstrated effective Human-Robotic Collaboration (HRC) by allowing a robot to interact dynamically with human players in a game of chance and perception.

## The Architecture Pipeline
The vision subsystem pipeline operates as follows:
```
Video Stream --> Object Detection and Tracking --> Ball Location Tracking Algorithm --> Environment Knowledge Data
```
From the hardware perspective, we utilized standard webcam, Logitech Streamcam White, as a recording device attached to the robotic arm joint before the gripper. The default pose for the robotic arm is acting like an overhead camera that shows the playing field or the table.
From the software perspective, we implemented YOLOv7-tiny model,  fine-tuned on a custom dataset of 2,071 annotated images, trained model to detect the cups and the ball in real-time scenarios. For the computation of the detection model, it runs on local device.

## The Occlusion Problem
The vision system is paired with the SORT algorithm to detect and track the cups and ball within the action space. Because the game involves prolonged occlusion—specifically, the ball being hidden beneath identical cups and the robotic arm obscuring the camera's view—standard tracking IDs frequently drop or update unnecessarily. To counter this, we implemented a custom algorithm relying on continuous centroid monitoring.
At the exact moment the cup covers the ball, the system calculates the Euclidean distance between the bounding box center-point of each detected cup and the ball. When a cup's centroid enters a predefined distance threshold relative to the ball, our algorithm links the two entities and flags that specific cup's ID as the "VIP" (the cup containing the ball). While the cups are in motion, tracking is sustained by the SORT algorithm combined with frame-by-frame storage of the VIP’s location and ID data. If the robotic arm occludes the camera and causes the tracking algorithm to drop or reassign IDs, the system relies on this stored location history. Upon re-detection, it calculates the Euclidean distance from the last known location to re-identify the VIP cup, manually overriding the assigned ID to maintain continuity.
Here are the code samples for the problem solving:
```python
def get_vip(self, ball_info, cups_list):
        ball_center = centroid(ball_info[:4]) # Compute ball's bbox centroid
        
        for c, cup in enumerate(cups_list):
            cup_center = centroid(cup[:4]) # Compute cup's center
            centroid_distance = euclidean_dist(ball_center, cup_center) # Distance
            
            if centroid_distance < self.center_thresh: # Check for VIP
                self.vip = [cup] # Assign VIP
                break
```

## Publication
* **Title:** *A Case of Cups and a Ball: Utilizing Generative Artificial Intelligence for Human-robotic Collaboration in Task Execution*
* **Conference:** 2024 International Automatic Control Conference (CACS), Taoyuan, Taiwan.
* **DOI:** [10.1109/CACS63404.2024.10773301](https://doi.org/10.1109/CACS63404.2024.10773301)

## Repository
* **GitHub:** [View Source Code Here](https://github.com/SpencerGPerkins/YOLOv7_SORT_3-cup_game)