---
title: nn.Embedding()
categories: [pytorch]
comments: true

---

# nn.Embedding()

- pytorche에서 CGAN을 구현할 때, Generator과 Discriminator 부분이 nn.Embedding을 통해서 구현될 수 있다. 

- A simple lookup table that stores embeddings of a fixed dictionary and size.

  This module is often used to store word embeddings and retrieve them using indices. The input to the module is a list of indices, and the output is the corresponding word embeddings.

- Embedding vector : 입력 정수에 대해서 밀집 벡터(dense vector)로 맵핑하고, 이 밀집 벡터는 인공 신경망의 학습 과정에서 가중치가 학습되는 것과 같은 방식으로 훈련된다. 

```python
>>> # an Embedding module containing 10 tensors of size 3
>>> embedding = nn.Embedding(10, 3)
>>> # a batch of 2 samples of 4 indices each
>>> input = torch.LongTensor([[1,2,4,5],[4,3,2,9]])
>>> embedding(input)
tensor([[[-0.0251, -1.6902,  0.7172],
         [-0.6431,  0.0748,  0.6969],
         [ 1.4970,  1.3448, -0.9685],
         [-0.3677, -2.7265, -0.1685]],

        [[ 1.4970,  1.3448, -0.9685],
         [ 0.4362, -0.4004,  0.9400],
         [-0.6431,  0.0748,  0.6969],
         [ 0.9124, -2.3616,  1.1151]]])

```





### Reference

- https://pytorch.org/docs/stable/generated/torch.nn.Embedding.html
- https://wikidocs.net

