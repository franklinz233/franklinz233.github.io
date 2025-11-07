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
I am a first-year Ph.D. student at [MMLAB@HKUST](https://mmlab-hkust.github.io/), supervised by [Prof. Anyi Rao](https://anyirao.com/) and Prof [Huamin Qu](http://www.huamin.org/). I obtained my master's degree at [Zhejiang University](https://www.zju.edu.cn/english/), where I collaborated with [Prof. Wei-Wei Xu](http://www.cad.zju.edu.cn/home/weiweixu/weiweixu_en.htm) and [Prof. Changqing Zou](https://person.zju.edu.cn/en/changqingzou).
Previously, I received my Bachelor’s degree from Hunan University. 

My research focuses on 3D/4D content generation and world model:
- Generalizable 3D Foundation Models: Generative 3D reconstruction from sparse, multi-view, or in-the-wild data.
- Interactive World Models: Real-time inference and control with Long-term memory.

# 🔥 News
- *2025.06*: &nbsp;🎉🎉 One paper accepted by ICCV 2025.
- *2024.12*: &nbsp;🎉🎉 One paper accepted by AAAI 2025.
- *2024.02*: &nbsp;🎉🎉 One paper accepted by CVPR 2024.
- *2023.12*: &nbsp;🎉🎉 One paper accepted by TCSVT.

# 📝 Publications
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

- **[ICRA 2023]** [Dyna-DepthFormer: Multi-frame Transformer for Self-Supervised Depth Estimation in Dynamic Scenes](https://arxiv.org/abs/2301.05871), **Songchun Zhang**, Chunhui Zhao. 


# 🖥️ Experience

- **March 2024 - Sept. 2024**  
  **Research Intern** - Anti-Entropy Research Group, miHoYo  
  Advisor: [Cheng Lin](https://clinplayer.github.io/)  
  Research included: 3D Scene Generation, Video World Model
  
- **Sept. 2023 - Feb. 2024**  
  **Research Intern** - Taobao and Tmall Group, Alibaba  
  Research included: Sparse View Object Reconstruction
  
- **April 2023 - Dec. 2023**  
  **Research Assistant** - State Key Lab of CAD&CG, Zhejiang University  
  Advisor: [Prof. Changqing Zou](https://scholar.google.com/citations?user=kj5HiGgAAAAJ&hl=en&oi=ao) and [Prof. Weiwei Xu](http://www.cad.zju.edu.cn/home/weiweixu/weiweixu_en.htm)  
  Research included: Text-Guided 3D Generation  
  
- **Sept. 2021 - April 2022**  
  **Research Intern** - OpenDriveLab of Shanghai AI Laboratory  
  Advisor: [Prof. Hongyang Li](https://scholar.google.com/citations?user=Hfrih1EAAAAJ) and Xiangwei Geng  
  Research included: Self-supervised Depth Estimation  
  
# 🎓 Academic Service
- Reviewing
  - Conferences: CVPR, ICRA, NeurIPS, AAAI, Siggraph Asia
  - Journals: TCSVT, TMM, KBS


# 🎖 Honors and Awards
- *2024.12* &nbsp;&nbsp; Outstanding Graduate of Zhejiang University
- *2021.12* &nbsp;&nbsp; National Scholarship  (Top 1% among all undergraduates)
- *2020.12* &nbsp;&nbsp; First Prize in China Undergraduate Mathematical Contest in Model (Top 0.1% among all undergraduates)
- *2020.12* &nbsp;&nbsp; National Scholarship  (Top 1% among all undergraduates)
- *2019.12* &nbsp;&nbsp; National Scholarship  (Top 1% among all undergraduates)
