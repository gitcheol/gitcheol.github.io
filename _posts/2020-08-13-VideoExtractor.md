---
title: VideoExtractor.py
categories: [video]
comments: true
---

# VideoExtractor using ffmpeg 

```python
import subprocess
import os
import shutil
import sys
import cv2

'''
video_extractor.py 
this script is the frame based video extractor to merge the videos by using ffmpeg 
you only need the video_path and frame_list

example)
"save_video"
if) video_path='./Explosion046_x264.mp4'
    frame_list=[[50,150],[130,170],[500,750]] #there are duplication between the frame [50,150]<->[130,170]. mergeIntervals function will resolve this!   
    addIntervals_list=addIntervals(video_path,frame_list,1) #[[20, 180], [100, 200], [470, 780]] % 1 means the 1 seconds of added interval e.g. [50,150] -> [20,180]   
    merged=mergeIntervals(addIntervals_list) #[[20, 200], [470, 780]]
    save_video(video_path,merged)
    
    if you have the frame anomaly frame list we recommend this sequences to extract the anomaly video.
    addIntervals -> mergeIntervals -> save_video
    
    ps. If your fps is not 30, change 
----------sub function example----------------------------------------
    "addIntervals_list(video_path,frame_list,add_time)"
        video_path='./Explosion046_x264.mp4'
        frame_list=[[0,10],[2599, 2704], [9307, 9397]]
        addIntervals_list=addIntervals(video_path,frame_list,30)
        print(merged)
        result is like this : [[0, 910], [1699, 3604], [8407, 10297]] 
    "mergeIntervals(arr)" 
        frame_list=[[50,100],[80,140],[200,250],[220,280]]
        merged=mergeIntervals(frame_list)
        print(merged)
        result is like this : [[50, 140], [200, 280]]
---------------------------------------------------------------------

made by gicheol from HGU
'''

####"save_video" is made of 2 parts 
####first. split video into the frame list based videos.
####second. merge the frame based videos into the one anomaly video.
def save_video(video_path,frame_list):
    #check the already exists files and remove.
    temp_path='./split_temp/'
    frame_merged_videolist='./listOfFrameMergedVideos.txt'
    result_path='./extracted_anomaly_video/'

    #remove already exists temp_path and list of merged videos.txt file
    if os.path.exists(temp_path):
        subprocess.call(['rm','-rf',temp_path])
    if os.path.exists(frame_merged_videolist):
        subprocess.call(['rm',frame_merged_videolist])

    #make the temp and result_path
    if not os.path.isdir(temp_path):
        os.mkdir(temp_path)
    if not os.path.isdir(result_path):
        os.mkdir(result_path)

    #check the arguments
    print("frame_list : ",frame_list)
    print("video_path : "+video_path)


#######################################################    
#####First Part
    #'i' is the anomaly video number 
    #if your video is not the fps 30 --> change the value
    #you can see the video info(fps) by using this command  "$ffmpeg -i video_name"
    i=0
    fps=30

    #start and duration calculation then split 
    for s,f in frame_list:
        f=(f-s)/fps
        s=s/fps
        subprocess.call(['ffmpeg','-y','-ss',str(s),'-i',video_path, '-t',str(f), '-c', 'copy', temp_path+'Anomaly_videos'+str(i).zfill(4)+'.mp4'])
        i+=1

    print("video_split done")
    

    #this part is made to concatnate the Anomaly_videos
    show_segment_file=subprocess.Popen(['ls',temp_path],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    show_segment_file.wait()
    output,err=show_segment_file.communicate()
    output=output.decode('utf-8')
    result_list=output.split()

    #make 'listOfFrameMergedVideos.txt' to save the list of frame based merged videos 
    with open(frame_merged_videolist,"w") as f:
        for i in result_list:
            i='file \''+temp_path+i+'\'\n'
            f.write(i)


######Second Part 
    subprocess.call(['ffmpeg','-y','-f','concat','-safe','0','-i',frame_merged_videolist,'-c','copy',result_path+'output.mp4'])
    print('save_vide done')

    #remove the 'temp_path' and 'frame_merged_videolist.txt'    
    subprocess.call(['rm','-rf',temp_path])
    subprocess.call(['rm',frame_merged_videolist])
    print("save_video_completed!")
    print("Anomaly frame list : " ,frame_list)
    return
 


def mergeIntervals(arr):
        # Sorting based on the increasing order
        # of the start intervals
        arr.sort(key = lambda x: x[0])

        # array to hold the merged intervals
        m = []
        s = -10000
        max = -100000
        for i in range(len(arr)):
            a = arr[i]
            if a[0] > max:
                if i != 0:
                    m.append([s,max])
                max = a[1]
                s = a[0]
            else:
                if a[1] >= max:
                    max = a[1]

        #'max' value gives the last point of
        # that particular interval
        # 's' gives the starting point of that interval
        # 'm' array contains the list of all merged intervals

        if max != -100000 and [s, max] not in m:
            m.append([s, max])

        return m

#add intervals between the time duration [] add_time 1 == 1 seconds
#if your video is not the fps 30 --> change the value
def addIntervals(video_path,frame_list,add_time):
    fps=30
    add_time=add_time*30
    cap=cv2.VideoCapture(video_path)
    Total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    #print("Total_frame : ",Total_frames)
    #print("added frame : ", add_time)
    m=[]
    for s,f in frame_list:
        if s-add_time>=0:
            s-=add_time
        if f+add_time<=Total_frames:
            f+=add_time
        m.append([s,f])

    return m

if __name__ == "__main__":
    #level1 
    #frame_list=[[50,150]]
    #level2
    frame_list=[[2599, 2704], [9307, 9397], [11618, 11819], [12246, 12527], [12635, 12873], [12908, 13028], [13151, 13417], [13508, 13674], [15223, 15303], [15987, 16581], [17015, 18093]]
    #level3
    #frame_list=[[2599, 2704], [9307, 9397], [11618, 11819], [12246, 12527], [12635, 12873], [12908, 13028], [13151, 13417], [13508, 13674], [15223, 15303], [15987, 16581], [17015, 18093], [18094, 18188], [18326, 18407], [18637, 18768], [19015, 19309], [19327, 19563], [19669, 19761], [20805, 20969], [21228, 21353], [21964, 22197], [22598, 22670], [22965, 23145], [20000, 23302], [23616, 23926], [23970, 24099], [24259, 24488], [29596, 29767], [31395, 32334]]
    addIntervals_list=addIntervals("./Explosion046_x264.mp4",frame_list,1)
    merged_list=mergeIntervals(addIntervals_list)
    save_video("./Explosion046_x264.mp4",merged_list)

```

