#!/usr/bin/env python3
"""
Merge comparison videos horizontally with labels.
Each output video contains 4 methods: CausalVid, RewardForcing, Self-Forcing, Astrolabe
"""

import os
import subprocess
import sys

# Video IDs to process
VIDEO_IDS = [
    '011', '014', '024', '039', '050', '074', '079',
    '104', '106', '107', '135', '150', '193', '265', '275',
    '297', '314', '342', '371', '372', '383', '386', '387', '391', '400', '410',
    '433', '484', '491', '500', '507', '538', '540', '546', '565', '567',
    '575', '586', '587', '588', '594', '596', '598', '607', '617',
    '619', '620', '630', '635', '636', '650', '679', '690', '692', '753', '761',
    '776', '836', '843', '865', '897', '902', '945', '959', '971'
]

# Methods in order (left to right)
METHODS = [
    ('causalvid', 'CausalVid'),
    ('rewardforcing', 'RewardForcing'),
    ('base', 'Self-Forcing'),
    ('astrolabe', 'Ours')
]

# Paths
INPUT_DIR = 'assets/videos/comparisons'
OUTPUT_DIR = 'assets/videos/comparisons_merged'

def get_video_dimensions(video_path):
    """Get video dimensions using ffprobe"""
    cmd = [
        'ffprobe', '-v', 'error', '-select_streams', 'v:0',
        '-show_entries', 'stream=width,height', '-of', 'csv=p=0',
        video_path
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    width, height = result.stdout.strip().split(',')
    return int(width), int(height)

def merge_video(video_id):
    """Merge 4 videos horizontally without labels"""
    input_files = []
    for method_dir, _ in METHODS:
        video_path = os.path.join(INPUT_DIR, method_dir, f'{video_id}.mp4')
        if not os.path.exists(video_path):
            print(f"Warning: {video_path} not found, skipping...")
            return False
        input_files.append(video_path)
    
    output_path = os.path.join(OUTPUT_DIR, f'{video_id}.mp4')
    
    # Build ffmpeg command - simple hstack without labels
    # hstack filter directly concatenates videos horizontally
    filter_complex = '[0:v][1:v][2:v][3:v]hstack=inputs=4[outv]'
    
    # Build full command
    cmd = ['ffmpeg', '-y']
    for f in input_files:
        cmd.extend(['-i', f])
    
    cmd.extend([
        '-filter_complex', filter_complex,
        '-map', '[outv]',
        '-c:v', 'libx264', '-preset', 'medium', '-crf', '23',
        output_path
    ])
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        print(f"Created: {output_path}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error processing {video_id}: {e.stderr.decode()}")
        return False

def main():
    # Create output directory if not exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    success_count = 0
    fail_count = 0
    
    for video_id in VIDEO_IDS:
        print(f"Processing {video_id}...")
        if merge_video(video_id):
            success_count += 1
        else:
            fail_count += 1
    
    print(f"\nDone! Success: {success_count}, Failed: {fail_count}")

if __name__ == '__main__':
    main()