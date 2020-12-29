---
title: Deeplearning_0. Python Quickstart Tutorial
categories: [ML]
comments: true


---

# Deeplearning_0. Python Quickstart Tutorial



#### List Slicing 

```python
>>> nums=list(range(5))
>>> nums
[0, 1, 2, 3, 4]

#pros of list slicing is getting a list from list 
>>> nums[0]
0
>>> nums[:1]
[0]

```

#### enumerate

```python
>>> animals = ['cat', 'dog', 'monkey']
>>> for idx, animal in enumerate(animals):
        print('{}. {}'.format(idx+1,animal))
1. cat
2. dog
3. monkey
```



#### list comprehension

```python
>>> even_squre=[i*i for i in range(5) if i%2==0]
>>> even_squre
[0, 4, 16]

#same 
nums = [0, 1, 2, 3, 4]
even_squares = [x ** 2 for x in nums if x % 2 == 0]
[0, 4, 16]
```

#### etc

```python
tuple
Dictionaries
Loop with Dictionary
Dictionary Comprehensions
Functions
Functions with keyword Arguments
classes
```



#### Packages for Machine Learning 

```python
◼ numpy (www.numpy.org)
	- Multi-dimensional array, vector/matrix operation, FFT, random number capabilities
◼ scikit-learn (scikit-learn.org)
	- Machine learning package in Python
	- Classic algorithms for classification, regression, clustering, etc.
#앙상블(ensemble)
◼ xgboost (xgboost.readthedocs.io)
	- Gradient boosting library
◼ pydnn (pydnn.readthedocs.io)
	- GPU neural network library for deep learning in Python
◼ matplotlib (matplotlib.org)
	- 2D plotting library (graph, images, etc.)
◼ pandas (pandas.pydata.org)
	- Python data analysis library (DataFrame, Series)
◼ mglearn (optional)
	- Machine learning education package (sample datasets and algorithms)
```

### scikit-learn

```python
◼ Machine learning package in Python ◼ Classification
	- k-NN, decision trees, random forests, MLP, SVM, ... 
◼ Regression
	- linear, Ridge, Lasso, ElasticNet, SVR, ... 
◼ Clustering
	- k-Means, spectral, ... 
◼ Dimensionality reduction
	- PCA, LDA, ...
```

### Example) Iris Dataset in scikit-learn

```python
#Load dataset
from sklearn.datasets import load_iris iris_dataset = load_iris()
#Split training/test dataset
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(iris_dataset.data, iris_dataset.target, random_state=0)
```

#### pandas

```python
DataFrame
import numpy as np import pandas as pd
#Reading a csv file
df1 = pd.read_csv(<filename>)
#Accessing a column or row 
df1[‘A’] # column ‘A’ 
df1.iloc[2] # 2nd row

Quick statistic summary df1.describe()
Ex) Converting to numpy ndarray array1 = df1.to_numpy()
```

![image-20201017150730552](/Users/gicheol/gitcheol.github.io/assets/ML/deeplearning/20201017-df_read_csv.png)

![image-20201017150542887](/Users/gicheol/gitcheol.github.io/assets/ML/deeplearning/20201017-df_describe().png)

#### Using scikit-learn

```python
◼ Import package
	Import sklearn as sk
	from sklearn.neighbors import KNeighborsClassifier
◼ Create classifier/regressor object
	knn = KNeighborsClassifier(n_neighbors=3)
◼ Train to a training dataset 
	knn.fit(X_train,y_train)
◼ Use it
prediction = knn.predict(X_new)
```

#### numpy

```python
>>> a=np.array([[1,2,3],[4,5,6]])
>>> a
array([[1, 2, 3],
       [4, 5, 6]])
>>> a.shape
(2,3)

#creating array
>>> np.ones((1,2))
array([[1., 1.]])

>>> np.full((2,3), 7)
array([[7, 7, 7],
       [7, 7, 7]])

>>> np.eye(2)
array([[1., 0.],
       [0., 1.]])

>>> np.random.random((2,2))
array([[0.3527855 , 0.03958036],
       [0.08752061, 0.70710253]])

#numpy slicing
>>> np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [ 9, 10, 11, 12]])
>>> a.shape
(3,4)

>>> a[:2,1:3]
array([[2, 3],
       [6, 7]])

>>> a[1,:]
array([5, 6, 7, 8])

>>> a[1:2,:]
array([[5, 6, 7, 8]])

#Broadcasting
>>> x = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]]) 
>>> x
array([[ 1,  2,  3],
       [ 4,  5,  6],
       [ 7,  8,  9],
       [10, 11, 12]])

v = np.array([1, 0, 1])

>>> x+v 
array([[ 2,  2,  4],
       [ 5,  5,  7],
       [ 8,  8, 10],
       [11, 11, 13]])

```

#### numpy functions

```python
#reshape()
>>> a
array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
>>> a.shape
(20,)

>>> np.reshape(a,(4,5))
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14],
       [15, 16, 17, 18, 19]])

#expand_dims() but reshape로 해결 가능
>>> a=np.arange(10)
>>> a
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
>>> np.expand_dims(a,axis=0)
array([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]])

>>> a=np.arange(10)
>>> np.expand_dims(a,axis=1)
array([[0],
       [1],
       [2],
       [3],
       [4],
       [5],
       [6],
       [7],
       [8],
       [9]])
>>> np.expand_dims(a,axis=1).shape
(10, 1)

#squeeze()
>>> b=np.expand_dims(a,axis=1)
>>> b
array([[0],
       [1],
       [2],
       [3],
       [4],
       [5],
       [6],
       [7],
       [8],
       [9]])

>>> np.squeeze(b)
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])



```

#### Matplotlib

```python
import numpy as np
import matplotlib.pyplot as plt

# Compute the x and y coordinates for points on sine and cosine curves 
x = np.arange(0, 3 * np.pi, 0.1)
y_sin = np.sin(x)
y_cos = np.cos(x)

# Plot the points using matplotlib 
plt.plot(x, y_sin)
plt.plot(x, y_cos)
plt.xlabel('x axis label') 
plt.ylabel('y axis label') 
plt.title('Sine and Cosine') 
plt.legend(['Sine', 'Cosine']) 
plt.show()

```

![image-20201017155249457](/Users/gicheol/gitcheol.github.io/assets/ML/deeplearning/20201017-pyplot.png)





#### Reference

- https://github.com/callee2006
- https://numpy.org/doc