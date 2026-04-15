---
layout: ../../../layouts/MarkdownLayout.astro
title: 'CycleGAN-Based Synthetic Data Generation'
pubDate: 2026-04-16
description: 'Generative Synthetic Dataset Generation and Automatic Image Annotation'
author: 'Joy Chrissetyo Prajogo'
tags: ["project"]
image:
    url: '/images/pro-projects-content/cyclegan-defect-result.webp'
    alt: 'Synthetic Defect Dataset Comparison with Real'
---

<div class="vertical-image-stack">
  <img src="/images/pro-projects-content/cyclegan-defect-architecture.webp" alt="CycleGAN for Synthetic Defect Image Generation Architecture" />
  <img src="/images/pro-projects-content/cyclegan-defect-result.webp" alt="Real vs Synthetic Defect Data" />
</div>

<style>
  /* Stacks images vertically, centered, with a constrained width for readability */
  .vertical-image-stack {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 700px; 
    margin: 0 auto 3rem auto;
  }
  .vertical-image-stack img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
</style>

## Overview
This project addresses the critical bottleneck of data scarcity in Automated Optical Inspection (AOI) systems for manufacturing. We developed a pipeline utilizing Generative Adversarial Networks to artificially synthesize metallic surface defects, presented at **ICCMA 2025** in Paris, France.

By generating highly realistic synthetic data, we artificially expanded the training distribution, allowing downstream object detection models to achieve higher accuracy and robustness without the massive cost of manual data collection.

## The Architecture Pipeline
We utilized the standard **CycleGAN** architecture (unpaired image-to-image translation) and adapted it to a custom metallic surface defect dataset. The pipeline consisted of two main phases:
1. **Domain Translation:** Training the adversarial network to translate between "defect-free" metallic surfaces and various specific defect classes (e.g., scratches, dents).
2. **Data Integration:** Exporting the generated synthetic defects and merging them into the primary training dataset for downstream AOI models (like YOLO).

## The Core Engineering: Automatic Image Annotation (AIA)
Generating a synthetic image of a scratch is only half the battle. To train an object detection model, the system must know the exact bounding box coordinates of that generated scratch. Manually labeling synthetic data defeats the purpose of automation.

**The Solution:** We exploited the mathematical properties of Cycle Consistency Loss. Because CycleGAN enforces structural preservation between domains, the spatial geometry of the image does not shift during translation. We engineered an Automatic Image Annotation (AIA) script that programmatically maps the bounding box coordinates from the source domain directly onto the generated synthetic image.

```python
import os
import shutil

def generate_synthetic_annotations(synthetic_img_dir, source_annotation_dir, output_annotation_dir):
    """
    Exploits CycleGAN's spatial preservation to inherit bounding boxes.
    Eliminates the need for manual re-labeling of synthetic data.
    """
    for img_name in os.listdir(synthetic_img_dir):
        if not img_name.endswith('_fake.png'): continue
            
        # Extract base identifier to match with source annotation
        base_name = img_name.replace('_fake.png', '')
        source_ann_path = os.path.join(source_annotation_dir, f"{base_name}.txt")
        synthetic_ann_path = os.path.join(output_annotation_dir, f"{base_name}_fake.txt")
        
        # Inherit the YOLO-formatted bounding box directly
        if os.path.exists(source_ann_path):
            shutil.copy(source_ann_path, synthetic_ann_path)
            print(f"Auto-Annotated: {synthetic_ann_path}")
```

## Impact and Performance
By injecting this automatically annotated synthetic data into the training pipeline, we significantly increased the dataset variance. 
*(Note: Specific downstream accuracy improvements and mAP delta metrics are detailed in the full publication).*

## Publication
* **Title:** *CycleGAN-Based Synthetic Data Generation and Automatic Image Annotation for Metallic Surface Defect Detection*
* **Authors:** Satrio Sanjaya, Hsien-I Lin, and Joy Prajogo
* **Conference:** 2025 13th International Conference on Control, Mechatronics and Automation (ICCMA), Paris, France, 2025, pp. 528-533.
* **DOI:** [10.1109/ICCMA67641.2025.11369560](https://doi.org/10.1109/ICCMA67641.2025.11369560)

## Repository
* **GitHub:** [View CycleGAN Original Source Code Here](https://github.com/junyanz/cyclegan)