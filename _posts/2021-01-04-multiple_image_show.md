---
title: showing multiple image
categories: [matplotlib]
comments: true

---

# Showing multiple image

```python
import matplotlib.pyplot as plt

fig=plt.figure(figsize=(8, 8))
columns = 5
rows = 5
for i in range(1, columns*rows +1):
    fig.add_subplot(rows, columns, i) # key function
    plt.imshow(image_numpy[i-1],cmap='gray')
    
plt.show()
```





### Reference

- https://stackoverflow.com/questions/46615554/how-to-display-multiple-images-in-one-figure-correctly/46616645