---


title: transposedConv2d
categories: [pytorch]
comments: true

---

# transposed Convolutions

###  Convolution and DeConvolution

```python
Convolution
An image of 5x5 is fed into a convolutional layer. The stride is set to 2, the padding is deactivated and the kernel is 3x3. This results in a 2x2 image.

DeConvolution은 정확히 반대의 연산
If we wanted to reverse this process, we’d need the inverse mathematical operation so that 9 values are generated from each pixel we input. Afterward, we traverse the output image with a stride of 2. This would be a deconvolution.
```

![2](/assets/ML/deeplearning/20210112_deconv2.png)



### Transposed Convolusions

```python
A transposed convolution does not do that. The only thing in common is it guarantees that the output will be a 5x5 image as well, while still performing a normal convolution operation. To achieve this, we need to perform some fancy padding on the input.
```

![3](/assets/ML/deeplearning/20210112_deconv.png)

### 그리면서 하는게 Best

```python

```





![sdasd](/assets/ML/deeplearning/20210112_deconv3.png)









### References

- https://datascience.stackexchange.com/questions/6107/what-are-deconvolutional-layers
- https://towardsdatascience.com/types-of-convolutions-in-deep-learning-717013397f4d
- https://www.youtube.com/watch?v=96_oGE8WyPg
- https://zzsza.github.io/data/2018/02/23/introduction-convolution/