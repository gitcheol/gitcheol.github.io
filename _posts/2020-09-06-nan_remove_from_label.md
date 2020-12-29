---
title: nan_val remove
categories: [video]
comments: true
---

# Nan Value remove

```python
#prediction한 y_score값에 nan value가 있는 경우에, nan value를 제거
#from
'y_scores=[1,2,nan,3,4]'
'y_true=[1,0,0,0,1]'
#to
'y_scores=[1,2,3,4]'
'y_true=[1,0,0,1]'

import numpy as np
from sklearn.metrics import roc_auc_score
import pickle
import pandas as pd

with open('./y_scores','rb')as f:
    y_scores=pickle.load(f)
with open('./y_trues','rb')as f:
    y_true=pickle.load(f)

#vstack으로 
matric=np.vstack((y_scores,y_true))
#numpy to pandas dataframe
dataset = pd.DataFrame({'row1': matric[0,:], 'row2': matric[1,:]})

#drop nan value
re=dataset.dropna(axis=0)

#pandas dataframe to numpy
numpy=pd.DataFrame(re).to_numpy()

#transpose
numpy = np.transpose(numpy)

#result 
y_scores=numpy[0]
y_true=numpy[1]
```





