# writable-config-generator
##  Unique WMMT Writable Config File Generator for use with Bayshore
### Created by Damon Murdoch ([@SirScrubbington](https://twitter.com/SirScrubbington))

## Description

This is a simple JavaScript application for generating unique serial numbers for the Wangan Midnight Maximum Tune arcade game series. These unique serial numbers prevent player overlaps when connecting to the game servers. The following section will guide you through using the tool to generate unique board network and serial IDs.

### Version
The latest revision for this software is 1.0.

### Language
html/css/js

### Date Created
26/10/2023 6:00 PM

## Usage

1. Connect to https://www.dragapult.xyz/wmmt-writable-config-generator

2. You will see a user interface with the following elements:
   - **Board Network ID**: This field displays the generated Board Network ID.
   - **Board Serial ID**: This field displays the generated Board Serial ID.
   - **Writable Config File**: This text area displays the contents of the 'WritableConfig.ini' file.
   
3. Generating Network and Serial IDs:
   - Click the "Reroll" buttons next to the Network ID and Serial ID fields to generate random IDs.
   - Click the "Copy" buttons to copy the generated IDs to your clipboard.

4. Writable Config File:
   - The 'WritableConfig.ini' file contents are displayed in the text area.
   - You can click the "Reroll Both" button to regenerate both Network and Serial IDs.
   - Click the "Copy Content" button to copy the Writable Config contents to your clipboard.
   - Click the "Download File" button to download the 'WritableConfig.ini' file.

5. How to Use 'WritableConfig.ini':
   - Save the contents of the 'WritableConfig.ini' text area to a file named 'WritableConfig.ini'.
   - Place the 'WritableConfig.ini' file in your AMCUS directory (e.g., 'wmmt6/AMCUS/WritableConfig.ini').
   - Modify your 'AMConfig.ini' file to include the following:
   ```ini
   [AMAuthdConfig]
   ;; AMAuthd 一般設定
   amdcfg-authType=ALL.NET
   amdcfg-sleepTime=50
   amdcfg-resoNameTimeout=180
   amdcfg-writableConfig=.\WritableConfig.ini
   amdcfg-showConsole=ENABLE
   amdcfg-logfile=
   amdcfg-export_log=
   ```

   - Your game should now connect using the unique board network and serial codes.

## Future Changes
A list of future planned changes are listed below.

| Change Description | Priority |
| ------------------ | -------- | 
| No planned changes | -        |

### Problems or improvements
If you have any suggested fixes or improvements for this project, please 
feel free to open an issue [here](../../issues).


### Sponsor Me
If you would like to sponsor this project, please feel free to 
make a donation [here](https://www.paypal.com/paypalme/sirsc).