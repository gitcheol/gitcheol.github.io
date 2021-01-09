---
title: showing multiple images at once 
categories: [matplotlib]
comments: true

---

### Showing multiple image at once 

```python
import numpy as np
import matplotlib.pyplot as plt 

#25 gray scale img(size 28x28)
image_numpy = np.random.randn(25, 28, 28) 

def show_images(image,s=5):
  fig=plt.figure(figsize=(5, 5)) 
  columns = s 
  rows = s 
  for i in range(1, columns*rows +1):
    fig.add_subplot(rows, columns, i)
    plt.axis('off')
    plt.imshow(image[i-1],cmap='gray')
  plt.show()

show_images(image_numpy)
```

### Sample image generation code

```python
#sample images generation
z = torch.randn((5*5),100)
z = z.to(DEVICE)
Generated_image = G(z)
image_numpy=Generated_image.view(25, 28, 28).cpu().data.numpy()
```





### Reference

- https://stackoverflow.com/questions/46615554/how-to-display-multiple-images-in-one-figure-correctly/46616645