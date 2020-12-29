---
title: (review)Video Anomaly Detection for Smart Surveillance. arxiv 2020
categories: [paper_review]
comments: true
---

# Video Anomaly Detection for Smart Surveillance. arxiv 2020

#### 접근 방법

#### Unsupervised

- Training set : normal videos 

- Classic Machine learning
  - sparse coding, auto encoder 	
     \- hand-crafted features as will probability model[12], interaction force[18], mixture of DT-based(Dynamic Textures)[13], interaction flow(extract corner feature)[23], sparse coding[5,15](introduced effective way)]
- Deep Learning
  - Auto Encoder 기반 
    - AE(auto encoder)+FCN[9], ConvLSTM-AE+FCN[16], sparse coding + RNN[17], memory-augmented AE[7], 다음의 논문들은 AE를 기반으로Reconstruction error에 의해서 anomaly event가 결정된다.
  - k-menas clustering + one-versus-all SVM[11]
  - GAN기반
    - FCN based GAN[14,27], constraint on intensity gradient and motion for future frame generation[14], predictive coding module and error refinement module based on the GAN[27]

#### Weakly-supervised

- Training set : normal videos and abnormal videos(weakly tabled videos )
- MIL(multiple instance learning)[22], graph-based MIL[10], noisy label learning problem[28]

#### Supervised

- Training set : frame-level annotated training videos(frame별 체크된 주석)
- certain scenarious에서 사용됨 
- geometric 정보와 object detection을 사용 
- faster-RCNN to detect vehicles + attention-based LSTM module to learn the accident score[21], semantic segmentation and geometric prior[3], YOLOv3+multi object tracking[24]	
