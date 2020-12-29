---
title: import sklearn.model_selection
categiries: [python]
comments: true
---

# sklearn.model_selection

```python
sklearn.model_selection.train_test_split(*arrays, **options)
```

#### Parameters

- **test_size** :float or int, default=None
- **train_size** : float or int, default=None
- **random_state** : int or RandomState instance, default=None*
- **shuffle** : bool, default=True
- **stratify** : array-like, default=None

#### Returns

- **splitting** :list, length=2 len(arrays)



#### data declaration

```python
>>> import numpy as np
>>> from sklearn.model_selection import train_test_split
>>> X, y = np.arange(10).reshape((5, 2)), range(5)
>>> X
array([[0, 1],
       [2, 3],
       [4, 5],
       [6, 7],
       [8, 9]])
>>> list(y)
[0, 1, 2, 3, 4]

```

#### train, test data split

```python
>>> X_train, X_test, y_train, y_test = train_test_split(
...     X, y, test_size=0.33, random_state=42)
...
>>> X_train
array([[4, 5],
       [0, 1],
       [6, 7]])
>>> y_train
[2, 0, 3]
>>> X_test
array([[2, 3],
       [8, 9]])
>>> y_test
[1, 4]
```



```python
>>> train_test_split(y, shuffle=False)
[[0, 1, 2], [3, 4]]
```



#### Reference 

- https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html