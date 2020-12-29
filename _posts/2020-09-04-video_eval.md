---
title: performance evaluation
categories: [video]
comments: true
---

# performance evaluation



### Model evaluation

- 모델이 판단한 label과 실제 label을 비교함으로, 모델의 성능을 판단할 수 있다.
- 모델 평가에서 나올 수 있는 case는 이렇게 4가지 

![confusion_matrix](/assets/img/confusion_matrix.png)

- True Positive(TP) : 실제 True인 정답을 True라고 예측 (정답)
- False Positive(FP) : 실제 False인 정답을 True라고 예측 (오답)
- False Negative(FN) : 실제 True인 정답을 False라고 예측 (오답)
- True Negative(TN) : 실제 False인 정답을 False라고 예측 (정답)



#### 위 결과를 이용한 대표적인 지표 

| Accuracy  | TP+TN/TP+TN+FP+FN |
| --------- | ----------------- |
| Precision | TP/TP+FP          |
| Recall    | TP/TP+FN          |

1. Precision
   - 모델이 True라고 판단한 결과 중 실제 정답(TP)의 비율 

![img](/assets/ML/video/2020-09-04-prevision.png)

1. Recall
   - 모델의 실제 True인 것 중, 모델이 True라고 예측(TP)한 것의 비율

![img](/assets/ML/video/2020-09-04-recall.png)

- Precision-Recall Trade off

  - Precision과 Recall을 서로 Trade off관계에 있다.

- Accuracy

  - Precision,Recall에 False의 관점 추가

  ![img](/assets/ML/video/2020-09-04-accuracy.png)

- F1 score

  - F1 score는 Precision과 Recall의 조화평균입니다. 

- ROC(Receiver Operating Characteristic)

  ![img](/assets/ML/video/2020-09-04-roc.png)

- AUC(Area Under Curve)
  
  - ROC curve는 그래프이기 때문에 명확한 수치로써 비교하기가 어렵습니다. 따라서 그래프 아래의 면적값을 이용합니다. 이것이 바로 **AUC(Area Under Curve)**입니다. 최대값은 1이며 좋은 모델(즉, Fall-out에 비해 Recall 값이 클수록) 1에 가까운 값이 나옵니다.

#### Reference

- https://sumniya.tistory.com/26

  
