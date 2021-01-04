---
title: dropout inplace 
categories: [pytorch]
comments: true

---

# Dropout Inplace

### Dropout Inplace 

```python
# inplace = True로 해놓으면, Input이 change 됨 
import torch
import torch.nn as nn
inp = torch.tensor([1.0, 2.0, 3, 4, 5])

outplace_dropout = nn.Dropout(p=0.4)
print(inp)
output = outplace_dropout(inp)
print(output)
print(inp) # Notice that the input doesn't get changed here


inplace_droput = nn.Dropout(p=0.4, inplace=True)
inplace_droput(inp)
print(inp) # Notice that the input is changed now
```

### Output

```python
(play) Appleui-MacBook-Pro:splay gicheol$ python3 a.py 
tensor([1., 2., 3., 4., 5.])
tensor([1.6667, 3.3333, 5.0000, 0.0000, 8.3333])
tensor([1., 2., 3., 4., 5.])
tensor([0.0000, 0.0000, 5.0000, 6.6667, 8.3333])
```





### Reference 

- https://stackoverflow.com/questions/58589128/what-is-the-meaning-of-in-place-in-dropout