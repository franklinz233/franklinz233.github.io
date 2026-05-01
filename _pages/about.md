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
I am Songchun Zhang (张菘淳), a first-year Ph.D. student at [MMLAB@HKUST](https://mmlab-hkust.github.io/), supervised by [Prof. Anyi Rao](https://anyirao.com/) and Prof [Huamin Qu](http://www.huamin.org/). I obtained my master’s degree at [Zhejiang University](https://www.zju.edu.cn/english/), supervised by [Prof. Chunhui Zhao](https://person.zju.edu.cn/chhzhao), where I also collaborated with [Prof. Wei-Wei Xu](http://www.cad.zju.edu.cn/home/weiweixu/weiweixu_en.htm) and [Prof. Changqing Zou](https://person.zju.edu.cn/en/changqingzou) at the State Key Lab of CAD&CG.
Previously, I received my Bachelor’s degree from Hunan University.

My research focuses on **multimodal real-time interactive world models** for embodied intelligence and game prototyping:
- **Embodied Intelligence**: Building world models that enable agents to perceive, reason, and interact with physical and virtual environments in real-time.
- **Game Prototyping**: Developing generative systems for rapid creation and iteration of interactive game content and mechanics.

<span class='anchor' id='-news'></span>

# 🔥 News
- *2025.06*: &nbsp;🎉🎉 One paper accepted by ICCV 2025.
- *2024.12*: &nbsp;🎉🎉 One paper accepted by AAAI 2025.
- *2024.02*: &nbsp;🎉🎉 One paper accepted by CVPR 2024.
- *2023.12*: &nbsp;🎉🎉 One paper accepted by TCSVT.

<span class='anchor' id='-publications'></span>

# 📝 Publications
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
[[Paper]](https://ojs.aaai.org/index.php/AAAI/article/view/33097)
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
