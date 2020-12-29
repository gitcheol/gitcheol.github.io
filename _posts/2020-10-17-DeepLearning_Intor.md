---
title: Deeplearning_1. Introduction to ML
categories: [ML]
comments: true

---

# Deeplearning_1. Introduction to ML

### Agenda

1. Introduction
2. Machine Learning Models
3. Types of Machine Learning
4. Machine Systems
5. k-Nearest Neighbor



## 1. Introduction

### Artificial Intelligence

- Automation of intelligent behavior(지능이 요구되는 작업을 할 수 있도록 함)

  - Human thinking


### AI vs Conventional SW

- 일반적인 SW는 **predefined algorithm**을 따라서 tasks들을 수행 
- Artificial intelligence targets
  - **Complex tasks** hard to solve by a fixe procedure(강아지와 고양이 구별 등)
  - changing environment
  - Decision under uncertainty or ambiguity(확률적 관점)

```
Linear model의 경우 Conventional SW의 방식을 통해서 만들 수 있는데, data-driven approach로 접근
```

### Two Major Approaches to AI

- Knowledge-based approach
  - Symbolic AI(Knowledge or rule을 symbol로 나타냄)
    - ex) IBM Watson
- Data-dricen approach(machine learning)
  - Learn from data
  - Connectionist AI
    - ex) AlphaGo

#### Knowledge-based approach

- Symbolic, logic-based approach
  - Explicit symbolic representation of knowledge
  - Problem solving with searching/planning
  - Reasoning, inference, proof
- Logic, reasoning: form or operation on knowledge and concepts in abstraction
  - ex) 3단논법

### Data-dricen approach(machine learning)

- Field of study that gives computers the ability to learn without being explicitly programmed.

  ![image-20200910194400767](/assets/ML/deeplearning/20200910_1.png)



## 2. Machine Learning Models

#### **Machine Learning Methodologies**

1. Linear tasks

   - Linear regression / classification

2. Nonlinear tasks (simple)

   ```
   수치데이터와 같은 데이터는 복잡도가 크지 않아서 Machine Learning 사용
   ```

   - Decision tree (explainable)
   - Tree ensemble (Random Forests, GBM, XGBoost)
   - ANN (versatile, scalable)
   - SVM (good generalization)

3. Nonlinear tasks (complex)

   - 멀티미디어 data와 같이 복잡한 data

   - Image : CNN
   - Sequence, time-series data : RNN, CNN, Transformers

4. Probabilistic modeling(generation, transform, anomaly detection)

   - Gaussian models, GMM, HMM
   - GAN, VAE, auto-regressive models, flow-based models etc.

## 

#### 2.1 Linear Models 

#### 	Linear regression

- 직선의 방정식으로 data에 fitting시키는 방법 
- ŷ =𝑤𝑥 + 𝑤𝑥 + ⋯ + 𝑏 

​	<img src="/assets/ML/deeplearning/20201017-linear model.png" alt="image-20201017174224694" style="zoom:50%;" />

#### 	Linear classification

- 여러개의 직선으로 나타냈을 때, data를 classification할 수 있는 방법 
- Linear classification
  - Discriminant function of a class 𝑗 :
    - 𝑓(𝑥)=Sigma(𝑤𝑥+𝑏)
  - Decision rule
    - ŷ=𝑎𝑟𝑔𝑚𝑎𝑥 [𝑓(𝑥)]

![image-20200910200650754](/assets/ML/deeplearning/20200910_4.png)



#### 2.2 Nonlinear models(simple)

#### 	Decision Trees 

- Decision tress : represents a hierarchy of if/else questions leading to a decision
- 파란색과 빨간색 data가 많은 순서대로, 가상의 선을 그음 

![image-20200910201343665](/assets/ML/deeplearning/20200910_5.png)



#### 	Tree Ensemble

- Decision Tree를 만들 때는 혼자 잘 쓰이지 않고, 여러개의 tree를 만든 후 합쳐서 만든다. 여러개의 tree를 만든 후 각각의 확률을 이용해서 더 높은 정확도를 가짐
- Bagging: parallel combination (bagging = bootstrap aggregating의 준말)
  - 학습 데이터를 여러개의 bag으로 나누는 것 
  - bag에 몇개의 data를 뽑은 후, 다시 single -> bag -> single -> bag반복
  - Ex) Random forest
- Boosting: sequential combination
  - 앞에 있는 tree가 잘 학습하지 못하는 data들에 대해서 여러번의 decision을 반복
  - Primarily reduces bias, and also variance
  - Ex) AdaBoost, GBM, XGBoost(간단한 문제에서는 DL보다 좋은 성능을 보이는 경우가 많음), etc.

![image-20200910201726872](/assets/ML/deeplearning/20200910_6.png)

#### 	SVM

​	

#### 2.3 Nonlinear models(complex)

	#### 	ANN(Artificial Neural Networks)

- An artificial neural network is a mathematical model inspired by biological neural networks.
  - Intelligence comes from their connection weights
  - Connection weights are decided by learning or adaptation
  - Sequence, time-series data: RNN, CNN, Transformers  
  - Image : CNN

![image-20201017180842709](/assets/ML/deeplearning/20201017-ann.png)



#### 3.4 Probabilistic modeling (generation, transform, anomaly detection)

- Gaussian models, GMM, HMM
- GAN, VAE, auto-regressive models, flow-based models etc.



## 3. Types of Machine Learning

#### Supervised learning (labeled data)

- Learning with teacher

#### Unsupervised learning (unlabeled data)

- Learning without teacher

#### Semi-supervised learning (partially labeled data)

- Hybrid of supervised/unsupervised learning

#### Reinforcement learning (reward)

- Learning from critics



## 4. Machine Systems





## 5. k-Nearest Neighbor















#### References

- https://github.com/callee2006
- 















