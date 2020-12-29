---
title: image_num_change.py
categories: [video]
comments: true
---

Usage example directory files are like this. 

```
gicheol@hailow:~/lab/MNAD/dataset/shanghai/training$ tree -d
.
├── frames
│   ├── 01_001
│   ├── 01_002
│   ├── 01_003
│   ├── 01_004
│   ├── 01_005
│   ├── 01_006
│   ├── 01_007
│   ├── 01_008
│   ├── 01_009
│   ├── 01_010
│   ├── 01_011
│   ├── 01_012
│   ├── 01_013
│   ├── 01_014
│   ├── 12_012
│   ├── 12_013
│   ├── 12_014
│   ├── 12_015
│   ├── 13_001
│   ├── 13_002
│   ├── 13_003
│   ├── 13_004
│   ├── 13_005
│   ├── 13_006
│   └── 13_007
└── videos
```

Code : 
```python
import os
import subprocess
import sys

def change_image_number():
    current_path = os.getcwd()
    
    image_path_dir=current_path+'/frames'
    videos=sorted(os.listdir(image_path_dir))
    #for video in 
    print(videos) 
        
    for image_folder_name in videos:
        image_path=os.path.join(image_path_dir,image_folder_name)
        print(image_path)
        images=sorted(os.listdir(image_path))
        print(len(images))
        extension = ".jpg" 
        for i in images:
            image_num = i.split(".")[0]
            tmp=int(image_num)
            tmp-=1
            tmp=str(tmp)
            tmp=tmp.zfill(4)
            revised_image_num=tmp+extension
            origin_image_num=image_num+extension
            #print("origin_image_num", origin_image_num)
            #print("revised_ image_num", revised_image_num)
            subprocess.call(['mv',image_path+"/"+origin_image_num,image_path+"/"+revised_image_num])
            
    
if __name__ == "__main__":
    change_image_number()


```
