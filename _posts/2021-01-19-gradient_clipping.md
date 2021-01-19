---
title: gradient_clipping
categories: [pytorch]
comments: true

---

# Gradient clipping

### gradient clipping is 

-  그래디언트 클리핑은은 기울기 폭주를 막기 위해 임계값이 넘지 않도록, 값을 변경시켜주는 방법이다.



### parameter(torch.nn.parameter.Parameter)

- Parameters are [`Tensor`](https://pytorch.org/docs/stable/tensors.html#torch.Tensor) subclasses, that have a very special property when used with `Module` s - when they’re assigned as Module attributes they are automatically added to the list of its parameters, and will appear e.g. in `parameters()` iterator. Assigning a Tensor doesn’t have such effect. This is because one might want to cache some temporary state, like last hidden state of the RNN, in the model. If there was no such class as [`Parameter`](https://pytorch.org/docs/stable/generated/torch.nn.parameter.Parameter.html#torch.nn.parameter.Parameter), these temporaries would get registered too.
- Parameters
  - **data** ([*Tensor*](https://pytorch.org/docs/stable/tensors.html#torch.Tensor)) – parameter tensor.
  - **requires_grad** ([*bool*](https://docs.python.org/3/library/functions.html#bool)*,* *optional*) – if the parameter requires gradient. See [Excluding subgraphs from backward](https://pytorch.org/docs/stable/notes/autograd.html#excluding-subgraphs) for more details. Default: True







### simple mnist example 

```python
model = model()  # model instance generation 
>>> for i in model.parameters():
>>>   print(type(i))
<class 'torch.nn.parameter.Parameter'>
<class 'torch.nn.parameter.Parameter'>
....


# print parameters shapes
>>> for parms in model.parameters():
>>>   print(parms.data.shape)
torch.Size([1024, 784]) # ingoing parameters(first is out, second in in)
torch.Size([1024]) # outgoing parameters(same with above first column)
torch.Size([512, 1024])
torch.Size([512])
torch.Size([256, 512])
torch.Size([256])
torch.Size([1, 256])
torch.Size([1])


# before 
for params in D.parameters():
  print(params.data)
tensor([[-2.4107e-02,  2.0493e-02, -8.4793e-05,  ...,  2.7883e-02,
          4.8070e-03, -7.2117e-03],
        [-3.7653e-02, -1.1374e-02,  6.9550e-03,  ..., -2.3773e-02,
         -1.4548e-02,  2.8431e-02],
        [-1.8583e-02,  2.1012e-02, -1.7744e-02,  ...,  9.6293e-03,
         -3.7855e-02,  2.8655e-03],
        ...,

# gradient clipping
>>> for params in D.parameters():
>>>   print(params.data.clamp_(0,0.00001))
tensor([[0.0000e+00, 1.0000e-05, 1.0000e-05,  ..., 1.0000e-05, 0.0000e+00,
         0.0000e+00],
        [1.0000e-05, 1.0000e-05, 1.0000e-05,  ..., 0.0000e+00, 0.0000e+00,
         1.0000e-05],
        [0.0000e+00, 1.0000e-05, 1.0000e-05,  ..., 0.0000e+00, 0.0000e+00,
         0.0000e+00],
        ...,  



```







### Reference

- https://pytorch.org/docs/stable/generated/torch.nn.parameter.Parameter.html
- https://github.com/Zeleni9/pytorch-wgan/blob/master/models/wgan_clipping.py