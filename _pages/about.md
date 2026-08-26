---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# About Me
I am Songchun Zhang (张菘淳), a first-year Ph.D. student at HKUST. I obtained my master’s degree at [Zhejiang University](https://www.zju.edu.cn/english/), supervised by [Prof. Chunhui Zhao](https://person.zju.edu.cn/chhzhao), where I also collaborated with [Prof. Wei-Wei Xu](http://www.cad.zju.edu.cn/home/weiweixu/weiweixu_en.htm) and [Prof. Changqing Zou](https://person.zju.edu.cn/en/changqingzou) at the State Key Lab of CAD&CG.
Previously, I received my Bachelor’s degree from Hunan University.

My research focuses on **multimodal real-time interactive world models** for embodied intelligence and game prototyping:
- **Embodied Intelligence**: Building world models that enable agents to perceive, reason, and interact with physical and virtual environments in real-time.
- **Game Prototyping**: Developing generative systems for rapid creation and iteration of interactive game content and mechanics.

<span class='anchor' id='-news'></span>

# 🔥 News
- *2026.06*: &nbsp;🎉🎉 Two papers accepted to SIGGRAPH Asia, including one TOG paper.
- *2026.06*: &nbsp;🎉🎉 Two papers are accepted by ECCV 2026.
- *2026.06*: &nbsp;🎉🎉 Echo-Infinity paper, project page, model, and code released.
- *2026.05*: &nbsp;🎉🎉 JoyAI-Echo technical report released.
- *2025.06*: &nbsp;🎉🎉 One paper accepted by ICCV 2025.
- *2024.12*: &nbsp;🎉🎉 One paper accepted by AAAI 2025.
- *2024.02*: &nbsp;🎉🎉 One paper accepted by CVPR 2024.
- *2023.12*: &nbsp;🎉🎉 One paper accepted by TCSVT.

<span class='anchor' id='-publications'></span>

# 📝 Publications
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Technical Report</div><video class="echowm-preview" autoplay muted loop playsinline controls preload="metadata" aria-label="EchoWM project preview"><source src="https://echovideo.jd.cn/Echo15/wm/assets/optimized/featured/hero-reel.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">

[**Technical Report**] [EchoWM: Open and Enterable Omnimodal World Models](https://echo-team-joy-future-academy-jd.github.io/Echo-1.5-Page/wm/)  \\
**Songchun Zhang**<sup>*</sup>, Yaowei Li<sup>*</sup>, Junhao Zhuang<sup>*</sup>, Weiyang Jin<sup>*</sup>, Haoyu Wang, Xin Lu, Yilang Sun, Shiyi Zhang, Haoran Li, Xiaoxiao Ma, Yuming Li, Yijun Liu, Yaofeng Su, Yanwen Ma, Haoyu Wu, Zihan Su, Yue Ma, Lvmin Zhang, Haoyang Huang, Zeyue Xue, Anyi Rao, Nan Duan \\
[[Project page]](https://echo-team-joy-future-academy-jd.github.io/Echo-1.5-Page/wm/)
[[Paper]](https://arxiv.org/pdf/2608.23189)

- An open and enterable omnimodal world model for real-time audio-visual generation, camera-intent control, and interactive world exploration.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Technical Report</div><video class="echowm-preview" autoplay muted loop playsinline controls preload="metadata" aria-label="EchoVideo project preview"><source src="https://echovideo.jd.cn/Echo15/media/source/august-23.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">

[**Technical Report**] [Long-Horizon Audio-Visual Generation for Persistent Stories and Interactive Worlds](https://arxiv.org/abs/2608.23383)  \\
Echo Team @ Joy Future Academy, JD \\
[[Project page]](https://echo-team-joy-future-academy-jd.github.io/Echo-1.5-Page/)
[[Paper]](https://arxiv.org/abs/2608.23383)

- JoyAI-Echo-1.5 is a unified audio-visual generation system for persistent long-form stories and interactive worlds, combining cross-shot memory, geometric camera control, and rollout-aware training.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Technical Report</div><img src='https://raw.githubusercontent.com/jd-opensource/JoyAI-Echo/main/assets/image.png' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**Technical Report**] [JoyAI-Echo: Pushing the Frontier of Long Audio-Visual Generation](https://echo-team-joy-future-academy-jd.github.io/Echo-LongVideo-Page/)  \\
Echo Team @ Joy Future Academy, JD \\
[[Project page]](https://echo-team-joy-future-academy-jd.github.io/Echo-LongVideo-Page/)
[[Paper]](https://www.researchgate.net/publication/405770309_JoyAI-Echo_Pushing_the_Frontier_of_Long_Audio-Visual_Generation)
[[Code]](https://github.com/jd-opensource/JoyAI-Echo)

- This technical report presents a memory-driven audio-visual generation framework for minute-level coherent video, real-time streaming, conversational control, and high-resolution output.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv</div><img src='images/echo_infinity.gif' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**Arxiv**] [Echo-Infinity: Learnable Evolving Memory for Real-Time Infinite Video Generation](https://arxiv.org/abs/2606.04527)  \\
Yuxuan Bian, Zeyue Xue, **Songchun Zhang**, Shiyi Zhang, Weiyang Jin, Yaowei Li, Junhao Zhuang, Haoran Li, Jie Huang, Haoyang Huang, Nan Duan, Qiang Xu. \\
[[Project page]](https://echo-team-joy-future-academy-jd.github.io/Echo-Infinity/)
[[Paper]](https://arxiv.org/abs/2606.04527)
[[Code]](https://github.com/Echo-Team-Joy-Future-Academy-JD/Echo-Infinity)
[[Model]](https://huggingface.co/Echo-Team/Echo-Infinity)

- This paper presents a learnable evolving memory framework for real-time infinite video generation with constant-cost long-history compression.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv</div><img src='images/astrolabe.gif' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**Arxiv**] [Astrolabe: Steering Forward-Process Reinforcement Learning for Distilled Autoregressive Video Models](https://arxiv.org/abs/2603.17051)  \\
**Songchun Zhang**, Zeyue Xue, Siming Fu, Jie Huang, Xianghao Kong, Yue Ma, Haoyang Huang, Nan Duan, Anyi Rao. \\
[[Project page]](https://franklinz233.github.io/projects/astrolabe/)
[[Paper]](https://arxiv.org/abs/2603.17051)
[[Code]](https://github.com/franklinz233/Astrolabe)

- This paper presents an efficient online RL framework for aligning distilled autoregressive video models with human visual preferences.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2026</div><img src='images/flexcomposer.gif' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**ECCV 2026**] [FlexComposer: Unified Video Compositing from Images to Dynamic Footage with Flexible Trajectory Control](https://arxiv.org/pdf/2607.29627)  \\
**Songchun Zhang**, Sitong Guo, Xianghao Kong, Pengwei Liu, Yuwei Guo, Lvmin Zhang, Anyi Rao. \\
[[Project page]](https://franklinz233.github.io/projects/flexcomposer/)
[[Paper]](https://arxiv.org/pdf/2607.29627)

- This paper presents a unified trajectory-guided video compositing framework for seamlessly integrating static images and dynamic footage with flexible motion control.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TOG 2026</div><img src='images/livelight.gif' alt="LiveLight real-time streaming video relighting" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**TOG 2026**] [LiveLight: Real-time Streaming Video Relighting with Interactive Control](https://living-lighting.github.io/)  \\
Yue Ma, Jiangming Wang, Yucheng Wang, Xilai Wang, Zhiyuan Li, Xinyu Wang, Hongyu Liu, Ruofan Liang, **Songchun Zhang**, Yuxuan Xue, Qifeng Chen. \\
[[Project page]](https://living-lighting.github.io/)
[[Paper]](https://living-lighting.github.io/assets/LiveLight.pdf)
[[Code]](https://github.com/mayuelala/LiveLight)

- This paper presents a real-time streaming video relighting framework with interactive 3D point-light control, supporting long videos while preserving appearance and temporal coherence.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SIGGRAPH Asia 2026</div><img src='images/shotverse.gif' alt="ShotVerse cinematic multi-shot video creation" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**SIGGRAPH Asia 2026**] [ShotVerse: Advancing Cinematic Camera Control for Text-Driven Multi-Shot Video Creation](https://shotverse.github.io/)  \\
Songlin Yang, Zhe Wang, Xuyi Yang, **Songchun Zhang**, Xianghao Kong, Taiyi Wu, Xiaotong Zhao, Ran Zhang, Alan Zhao, Anyi Rao. \\
[[Project page]](https://shotverse.github.io/)
[[Paper]](https://arxiv.org/abs/2603.11421)
[[Code]](https://github.com/Songlin1998/ShotVerse)

- This paper introduces a plan-then-control framework for cinematic multi-shot video generation, combining a VLM planner with camera-trajectory control for globally consistent shots.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026 Highlight</div><img src='images/bico.jpg' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**CVPR 2026 Highlight**] [Composing Concepts from Images and Videos via Concept-prompt Binding](https://refkxh.github.io/BiCo_Webpage/)  \\
Xianghao Kong, Zeyu Zhang, Yuwei Guo, Zhuoran Zhao, **Songchun Zhang**, Anyi Rao. \\
[[Project page]](https://refkxh.github.io/BiCo_Webpage/)
[[Paper]](https://refkxh.github.io/BiCo_Webpage/static/pdfs/paper.pdf)

- This paper presents a one-shot method for flexible visual concept composition by binding visual concepts with prompt tokens.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><img src='images/spatialcrafter.gif' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**ICCV 2025**] [SpatialCrafter: Unleashing the Imagination of Video Diffusion Models for Scene Reconstruction from Limited Observations](https://arxiv.org/abs/2505.11992)  \\
**Songchun Zhang**, Huiyao Xu, Sitong Guo, Zhongwei Xie, Pengwei Liu, Hujun Bao, Weiwei Xu, Changqing Zou. \\
[[Project page]](https://franklinz233.github.io/projects/spatialcrafter/)
[[paper]](https://arxiv.org/abs/2505.11992)

- This paper presents a 3D scene reconstruction method from sparse inputs.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2025</div><img src='images/aaai_25.png' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**AAAI 2025**] [Pragmatist: Multiview Conditional Diffusion Models for High-Fidelity 3D Reconstruction from Unposed Sparse Views](https://arxiv.org/abs/2412.08412)  \\
**Songchun Zhang**, Chunhui Zhao. \\
[[Paper]](https://arxiv.org/pdf/2412.08412)
[[Code]](https://github.com/franklinz233/Sparserecon)

- This paper presents a 3D object reconstruction method from sparse and unposed inputs.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='images/3dscenedreamer.png' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**CVPR 2024**] [3D-SceneDreamer: Text-Driven 3D-Consistent Scene Generation](https://openaccess.thecvf.com/content/CVPR2024/papers/Zhang_3D-SceneDreamer_Text-Driven_3D-Consistent_Scene_Generation_CVPR_2024_paper.pdf)  \\
**Songchun Zhang**, Yibo Zhang, Quan Zheng, Rui Ma, Wei Hua, Hujun Bao, Weiwei Xu, Changqing Zou. \\
[[Project page]](https://franklinz233.github.io/)
[[Paper]](https://openaccess.thecvf.com/content/CVPR2024/papers/Zhang_3D-SceneDreamer_Text-Driven_3D-Consistent_Scene_Generation_CVPR_2024_paper.pdf)
[[Code]](https://github.com/franklinz233/3D_Scene_Generation)

- This paper presents a novel text-driven 3D scene generation method that improves visual quality and 3D consistency.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2023</div><img src='images/TCSVT.png' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

[**TCSVT 2023**] [Cross-Video Contextual Knowledge Exploration and Exploitation for Ambiguity Reduction in Weakly Supervised Temporal Action Localization](https://ieeexplore.ieee.org/document/10354337)  \\
**Songchun Zhang**, Chunhui Zhao. \\
[[Paper]](https://ieeexplore.ieee.org/document/10354337)
[[Code]](https://github.com/franklinz233/Action_localization)

- This paper presents a weakly-supervised action localization framework leveraging cross-video information.

</div>
</div>

<span class='anchor' id='-experience'></span>

# 🖥️ Experience

<ul class="section-experience">
<li><strong>March 2024 - Sept. 2024</strong><br>
<strong>Research Intern</strong> - Anti-Entropy Research Group, miHoYo<br>
Advisor: <a href="https://clinplayer.github.io/">Cheng Lin</a><br>
Research included: 3D Scene Generation, Video World Model</li>

<li><strong>Sept. 2023 - Feb. 2024</strong><br>
<strong>Research Intern</strong> - Taobao and Tmall Group, Alibaba<br>
Research included: Sparse View Object Reconstruction</li>

<li><strong>April 2023 - Dec. 2023</strong><br>
<strong>Research Assistant</strong> - State Key Lab of CAD&amp;CG, Zhejiang University<br>
Advisor: <a href="https://scholar.google.com/citations?user=kj5HiGgAAAAJ&hl=en&oi=ao">Prof. Changqing Zou</a> and <a href="http://www.cad.zju.edu.cn/home/weiweixu/weiweixu_en.htm">Prof. Weiwei Xu</a><br>
Research included: Text-Guided 3D Generation</li>

<li><strong>Sept. 2021 - April 2022</strong><br>
<strong>Research Intern</strong> - OpenDriveLab of Shanghai AI Laboratory<br>
Advisor: <a href="https://scholar.google.com/citations?user=Hfrih1EAAAAJ">Prof. Hongyang Li</a> and Xiangwei Geng<br>
Research included: Self-supervised Depth Estimation</li>
</ul>

<span class='anchor' id='-academic-service'></span>

# 🎓 Academic Service

<ul class="section-service">
<li>Reviewing
  <ul>
    <li>Conferences: CVPR, ICRA, NeurIPS, AAAI, Siggraph Asia</li>
    <li>Journals: TCSVT, TMM, KBS</li>
  </ul>
</li>
</ul>

<span class='anchor' id='-honors-and-awards'></span>

# 🎖 Honors and Awards

<ul class="section-honors">
<li><em>2024.12</em> &nbsp;&nbsp; Outstanding Graduate of Zhejiang University</li>
<li><em>2021.12</em> &nbsp;&nbsp; National Scholarship (Top 1% among all undergraduates)</li>
<li><em>2020.12</em> &nbsp;&nbsp; First Prize in China Undergraduate Mathematical Contest in Model (Top 0.1% among all undergraduates)</li>
<li><em>2020.12</em> &nbsp;&nbsp; National Scholarship (Top 1% among all undergraduates)</li>
<li><em>2019.12</em> &nbsp;&nbsp; National Scholarship (Top 1% among all undergraduates)</li>
</ul>
