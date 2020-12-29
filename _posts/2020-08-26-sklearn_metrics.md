---
title: import sklearn.metrics
categories: [python]
comments: true
---

# sklearn.metrics

- 머신러닝 라이브러리로 분류(classification), 회귀(regression), 군집화(clustering), 의사결정 트리(decision tree)등 다양한 머신러닝 알고리즘을 적용할 수 있는 함수 제공 



#### from scores, labels to roc_auc_score

```python
#test에서 정답 label과 prediction score를 통해서 모델의 성능을 평가하는 도구 
#Compute Area Under the Receiver Operating Characteristic Curve (ROC AUC) from prediction scores.
>>> import numpy as np
>>> from sklearn.metrics import roc_auc_score
>>> y_true = np.array([0, 0, 1, 1])
>>> y_scores = np.array([0.1, 0.4, 0.35, 0.8])
>>> roc_auc_score(y_true, y_scores)
0.75
```



#### from scores, labels to fpr,tpr,thresholds(auroc)

```python
>>> import numpy as np
>>> from sklearn import metrics
>>> y = np.array([1, 1, 2, 2])
>>> scores = np.array([0.1, 0.4, 0.35, 0.8])
>>> fpr, tpr, thresholds = metrics.roc_curve(y, scores, pos_label=2)
>>> fpr
array([0. , 0. , 0.5, 0.5, 1. ])
>>> tpr
array([0. , 0.5, 0.5, 1. , 1. ])
>>> thresholds
array([1.8 , 0.8 , 0.4 , 0.35, 0.1 ])
```



#### from scores, labels to precision, recall, thresholds(auprc)

```python
>>> import numpy as np
>>> from sklearn.metrics import precision_recall_curve
>>> y_true = np.array([0, 0, 1, 1])
>>> y_scores = np.array([0.1, 0.4, 0.35, 0.8])
>>> precision, recall, thresholds = precision_recall_curve(
...     y_true, y_scores)
>>> precision
array([0.66666667, 0.5       , 1.        , 1.        ])
>>> recall
array([1. , 0.5, 0.5, 0. ])
>>> thresholds
array([0.35, 0.4 , 0.8 ])
```







#### References

- https://scikit-learn.org/stable/modules/generated/sklearn.metrics.roc_curve.html