---
title: Linear regression Regularization
categories: [ML]
comments: true

---

# Linear regression Regularization



### 예제로 보는 Regularization

![image-20201025215257212](/Users/gicheol/Library/Application Support/typora-user-images/image-20201025215257212.png)

- Overffting : If we have too many features, the learned hypothesis may fit the training set very well, but fail to generalize to new examples(predict prices on new examples).

![image-20201025215932121](/Users/gicheol/Library/Application Support/typora-user-images/image-20201025215932121.png)

- this example is same with above Example. first one is underfitted about the graph
- second graph is well fitted to the graph
- third graph is too overffited about the graph



#### Why is there an overfitting problems?

- Because there are many features. we need to manipulate the information of the data.

![image-20201025220216589](/Users/gicheol/Library/Application Support/typora-user-images/image-20201025220216589.png)



#### two way addresing overfitting 

![image-20201025220357393](/Users/gicheol/Library/Application Support/typora-user-images/image-20201025220357393.png)

1. Reduce number of features(L1)
2. Keep all the feature, but reduce magnitude/values of parameters Θj(L2)



#### Regularization - 1.Reduce number of features(L1)

- make the Θ3 and Θ4 closer to 0

![image-20201025220826993](/Users/gicheol/Library/Application Support/typora-user-images/image-20201025220826993.png)

- Small values for parameters 
  - "Simpler" hypothesis
  - Less prone to overfitting
- Housing:
  - Features : feature1, feature2, ,,,,,,, feature100
  - parameters : also 1,2,3, ,,,,,, 100

![image-20201025221128568](/Users/gicheol/Library/Application Support/typora-user-images/image-20201025221128568.png)

- So we added the lambda function(regulrarization function)
- X^2 meaning is important in here. if the Θ^2 < 1, then the Θ^2 will be closer to the 0, other

![image-20201025221855137](/Users/gicheol/Library/Application Support/typora-user-images/image-20201025221855137.png)





#### Reference 

- https://www.youtube.com/watch?v=u73PU6Qwl1I&ab_channel=ArtificialIntelligence-AllinOne
- https://www.youtube.com/watch?v=KvtGD37Rm5I&ab_channel=ArtificialIntelligence-AllinOne
- https://www.youtube.com/watch?v=qbvRdrd0yJ8