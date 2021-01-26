---
title: torch.autograd.backward
categories: [pytorch]
comments: true


---

# torch.autograd.backward



```python
import torch
import numpy as np

a = torch.tensor([1.0, 2.0, 3.0], requires_grad = True)
b = torch.tensor([3.0, 4.0, 5.0], requires_grad = True)
c = torch.tensor([6.0, 7.0, 8.0], requires_grad = True)

y=3*a + 2*b*b + torch.log(c)        
gradients = torch.FloatTensor([1.0, 1.0, 1.0])
y.backward(gradients,retain_graph=True)    

#case 1 
>>> print(a.grad)
>>> print(b.grad)
>>> print(c.grad)
tensor([3., 3., 3.])
tensor([12., 16., 20.])
tensor([0.1667, 0.1429, 0.1250])

#case 2
gradients = torch.FloatTensor([2.0, 1.0, 1.0])
>>> print(a.grad)
tensor([6., 3., 3.])
```



### References

- https://stackoverflow.com/questions/43451125/pytorch-what-are-the-gradient-arguments







