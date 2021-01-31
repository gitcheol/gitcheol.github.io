---
title: random file name generation
categories: [video]
comments: true


---

# random file name generation



```python
import random

chr_list = [chr(alpha) for alpha in range(97,123)]
IMG_File_Extension = '.png'

for i in range(10):
    img_name = ''.join(random.sample(img_list, 10)) + IMG_File_Extension
    print(img_name)
```

