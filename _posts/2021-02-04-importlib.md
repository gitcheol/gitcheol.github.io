---
title: importlib
categories: [python]
comments: true


---

# importlib

- module과 class명을 문자열로 받아 동적으로 Import할 때 아용 
- importlib package or _ import _() 함수를 사용 

```python
import importlib 
    module = importlib.import_module(module_path) #module load

    # track the object
    tracker=getattr(module, tracker_name.upper()) (video_path,output_path,save) # attribute load
```

### example 

```python
#object tracking example
if __name__ == '__main__':

    # set path
    video_path = os.path.join(args.root_dir, args.video_path)
    output_path = os.path.join(args.root_dir, args.output_path)
    if not os.path.exists(output_path):
        os.makedirs(output_path)

    # iamge process list
    preprocess_list = args.img_options

    # config save
    save = args.save

    # dynamically model import
    tracker_name = args.model
    module_path = 'models.' + tracker_name
    module = importlib.import_module(module_path)

    # track the object
    tracker=getattr(module, tracker_name.upper())(video_path,output_path,save)
    tracker.track()

```