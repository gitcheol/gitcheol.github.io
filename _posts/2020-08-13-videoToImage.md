---
title: Video_To_Image.py
categories: [video]
comments: true
---

Usage example directory files are like this. 

```
gicheol@hailow:~/lab/MNAD/dataset/shanghai/training$ tree -d
.
├── frames
│   ├── 01_001
│   ├── 01_002
│   ├── 01_003
│   ├── 01_004
│   ├── 01_005
│   ├── 01_006
│   ├── 01_007
│   ├── 01_008
│   ├── 01_009
│   ├── 01_010
│   ├── 01_011
│   ├── 01_012
│   ├── 01_013
│   ├── 01_014
│   ├── 12_012
│   ├── 12_013
│   ├── 12_014
│   ├── 12_015
│   ├── 13_001
│   ├── 13_002
│   ├── 13_003
│   ├── 13_004
│   ├── 13_005
│   ├── 13_006
│   └── 13_007
└── videos
```

Code : 
```python
import os
import subprocess

def extract_videos():
    current_path = os.getcwd()
    video_path = os.path.join(current_path,'videos')
    videos = sorted(os.listdir(video_path))

    result_path = current_path + '/frames'
    if not os.path.exists(result_path):
        os.makedirs(result_path)
    
    
    for video in videos:
        input_video_path = os.path.join(video_path,video)
        output_directory_path = os.path.join(result_path,video.split('.')[0])
        file_name = '%4d.jpg' 
        if not os.path.exists(output_directory_path):
            os.makedirs(output_directory_path)
        result = subprocess.call(['ffmpeg','-i',input_video_path,'-r','24', os.path.join(output_directory_path,file_name)])
    
if __name__ == "__main__":
    extract_videos()


```



```python
#from directory
import os
import subprocess

def extract_videos(input_video_path,output_directory_path):
    files = sorted(os.listdir(input_video_path))


    for file in files:
        if file.split('.')[1]=='mp4':
            if not os.path.exists(os.path.join(output_directory_path,file)):
                os.makedirs(os.path.join(output_directory_path,file))    

            result=os.path.join(output_directory_path,file)
    
            file_name='%4d.jpg'
            subprocess.call(['ffmpeg','-i',os.path.join(input_video_path,file),'-r','30', os.path.join(result,file_name)])
    
if __name__ == "__main__":
     input_dir_path = os.getcwd() + '/resized_insidedoor_01/101-1_swoon01_place03_day'
     output_dir_path = os.getcwd() + '/resized_insidedoor_01/101-1_swoon01_place03_day_image'
     if not os.path.exists(output_dir_path):
         os.makedirs(output_dir_path)
     extract_videos(input_dir_path,output_dir_path)
```







