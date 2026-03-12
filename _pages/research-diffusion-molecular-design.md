---
layout: single
title: "Generative Models for Language"
permalink: /research/generative-models-language/
author_profile: false
research_area: true
research_order: 10
research_card_description: "Controllable text generation with structural and semantic constraints — from decoding-time guidance to constrained fine-tuning."
research_tags:
  - LLMs
  - constrained decoding
  - controllable generation
---

{% include base_path %}

<div class="cta-row" style="margin-top: 0.5rem;">
  <a class="btn" href="{{ base_path }}/#research"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i><span>Back to Research</span></a>
  <a class="btn" href="{{ base_path }}/publications/"><i class="fa-solid fa-book-open" aria-hidden="true"></i><span>Publications</span></a>
</div>

## Overview

Large language models generate fluently but often ignore hard constraints — format requirements, factual grounding, logical consistency, safety boundaries. My work investigates how to **inject constraints directly into the generation process** rather than relying on post-hoc filtering, through techniques spanning decoding-time guidance, constrained fine-tuning, and reward-shaped post-training.

This includes enforcing structural constraints (syntax, format, schema) at decoding time without degrading fluency, balancing hard constraints with soft preferences, and understanding how these methods scale.
