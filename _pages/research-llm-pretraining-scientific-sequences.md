---
layout: single
title: "Generative Models for Biological Sequences"
permalink: /research/generative-models-biological-sequences/
author_profile: false
research_area: true
research_order: 20
research_card_description: "Generating DNA, RNA, and protein sequences that satisfy biophysical constraints — folding stability, binding affinity, and functional activity."
research_tags:
  - RNA
  - protein design
  - biophysical constraints
---

{% include base_path %}

<div class="cta-row" style="margin-top: 0.5rem;">
  <a class="btn" href="{{ base_path }}/#research"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i><span>Back to Research</span></a>
  <a class="btn" href="{{ base_path }}/publications/"><i class="fa-solid fa-book-open" aria-hidden="true"></i><span>Publications</span></a>
</div>

## Overview

Biological sequence design requires generation that respects the physical laws governing molecular structure and function. I study how to incorporate **biophysical constraints** — thermodynamic stability, stereochemistry, binding geometry — into generative models (diffusion, autoregressive, flow-based) for molecules, RNA, and proteins, so that designed sequences are not just plausible but experimentally viable.

This involves encoding 3D structural constraints into sequence-level models, steering generation toward desired properties in data-scarce regimes, and developing pretraining strategies that help foundation models internalize the physical rules of biology.
