# YTPathfinder Documentation

## Overview
**YTPathfinder** is a Tampermonkey script designed to redirect YouTube videos to a custom domain while maintaining the original video ID. This script enhances the user experience by enabling seamless transitions to alternative platforms for video content.

## Features
- Automatic redirection from YouTube video pages to a custom domain.
- Retains the original YouTube video ID in the new URL.
- Works dynamically with the ever-changing content of YouTube.

## Installation
1. Ensure that Tampermonkey is installed in your browser.
2. Create a new script in Tampermonkey.
3. Copy and paste the entire YTPathfinder script into the Tampermonkey editor.
4. Save the script.

## Usage
Once installed, YTPathfinder runs automatically. There is no need for manual activation each time. When you navigate to a YouTube video, the script will automatically redirect you to the same video on the custom domain, maintaining the video ID.

## How it Works
- YTPathfinder continuously monitors the URL of your browser.
- When a YouTube video page is detected (`youtube.com/watch?v=`), the script extracts the video ID from the URL.
- The script then constructs a new URL with the custom domain, keeping the same video ID.
- Your browser is redirected to this new URL, seamlessly taking you to the alternative platform.

## Limitations
- YTPathfinder only works on YouTube and requires an active internet connection.
- The script is designed to work with standard YouTube video URLs.

## Author
Created by [Your Name]

## Version
1.1
