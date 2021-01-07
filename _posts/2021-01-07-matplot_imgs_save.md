---
title: save multiple images to video file
categories: [matplotlib]
comments: true


---

### Save multiple images to video file

```python
import matplotlib.animation as animation
import numpy as np
import matplotlib.pyplot as plt

#25 gray scale img(size 28x28)
image_numpy = np.random.randn(25, 28, 28)

# Set up formatting for the movie files
Writer = animation.writers['ffmpeg']
writer = Writer(fps=1, metadata=dict(artist='Me'), bitrate=1800)

fig = plt.figure(figsize=(8,8))
plt.axis("off")
ims = [[plt.imshow(i, animated=True, cmap='gray')] for i in image_numpy] # if the images 3 channel -> np.transpose(i,(1,2,0))
ani = animation.ArtistAnimation(fig, ims, interval=1000, repeat_delay=1000, blit=True)
ani.save('./out.mp4', writer=writer)
```



