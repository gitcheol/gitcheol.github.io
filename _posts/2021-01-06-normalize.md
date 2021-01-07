---
title: Normalization
categories: [ML]
comments: true

---

# Why we need to do normalize the input? 

- 모든 데이터 포인트가 동일한 정도의 스케일(중요도)로 반영되도록 해주는 게 정규화(Normalization)의 목표

- The reason is that any rescaling of an input vector can be effectively undone by changing the corresponding weights and biases, leaving you with the exact same outputs as you had before

- weight decay and Bayesian estimation can be done more conveniently with standardized inputs.

  (처음 feature preprocessing이 매우 중요할 수 있음을 보여줌)

  

- 정규화는 **Min-Max Normalization && Z-Score Normalization(Standardization)** 이 두가지가 있음 

```python
Min-Max Normalization
	- 이상치(outlier)에 너무 많은 영향을 받는다
```

```python
Z-Score Normalization (Standardization)
	- (X - 평균) / 표준편차
```





### References

- http://hleecaster.com/ml-normalization-concept/
- https://light-tree.tistory.com/132
- https://stackoverflow.com/questions/4674623/why-do-we-have-to-normalize-the-input-for-an-artificial-neural-network