---
layout: single
title: "Constrained Generative Models for Robotic Learning"
permalink: /research/constrained-generative-models-robotics/
author_profile: false
research_area: true
research_order: 30
research_card_description: "Learning robotic policies with safety and physics constraints — integrating environment dynamics into generative planning and control."
research_tags:
  - robotics
  - policy learning
  - safety constraints
---

{% include base_path %}

<div class="cta-row" style="margin-top: 0.5rem;">
  <a class="btn" href="{{ base_path }}/#research"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i><span>Back to Research</span></a>
  <a class="btn" href="{{ base_path }}/publications/"><i class="fa-solid fa-book-open" aria-hidden="true"></i><span>Publications</span></a>
</div>

## Overview

Robotic systems must generate actions that satisfy hard physical constraints — joint limits, collision avoidance, contact dynamics — while remaining adaptive to novel environments. I study how **generative models can serve as constrained policy learners**, combining the expressiveness of diffusion and flow-based planners with the guarantees needed for safe real-world deployment.

This includes incorporating kinematic and dynamic constraints into diffusion-based planners, composing safety constraints with reward-driven objectives, and enabling generative planning to transfer across embodiments.
