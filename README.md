## Cloud Kiosk Client (Linux installer)
Cloud kiosk client installer automatically checks application dependencies and installs it.
This script can be used to install or update Cloud Kiosk Client in Linux.

Installation prerequisite for fresh Raspberry PI OS
---------------------------------------------------
Update package list by running the following command
  sudo apt-get update
  sudo apt-get upgrade

Steps to Install Cloud Kiosk Client
-----------------------------------
- Enter into installer directory
- Run following command to make script runnable 

    chmod +x install.sh
- Run sudo ./install.sh

Installer configurations
------------------------
These are the installer configurations used in config.json 


- installation_path - Installation path of cloud kiosk client
- required_space - Required space in MB
- applicationUrl - Cloud Kiosk Client application URL
- imageServicesBaseUrl - Base URL of the image service
- cachePath - Cache folder path
- cloudUploadBaseUrl - Base URL of the cloud upload service
- mediaReaderServerBaseUrl - Base URL of  the media reader server 
- wifiSmbSharePath - SMB share directory
- dhcpStaticIp - DHCP static IP to use 
- dhcpRange - dnsmasq DHCP ip range
- ssid - SSID of the softAP (hostapd)
- passPharse - Pass pharse of the softAP

To build cloud kiosk client
---------------------------
- Enter into cloud-kiosk-client directory
- To build run following command
    npm run dist
- It will create an unpacked folder and appimage file,we need to use "linux-armv7l-unpacked" directory
- Rename "linux-armv7l-unpacked" directory to cloud-kiosk-client
- Compress cloud-kiosk-client folder to tar.gz file format using the following command
   
    tar -czvf cloud-kiosk-client.tar.gz cloud-kiosk-client

How to run Cloud Kiosk Client app
---------------------------------
- Open terminal
- Enter into cloud-kiosk-client installed directory
- Run the command to start app

    ./mediareader-kiosk
  

ImageService
-------------
- .NET Core version used - dotnet-sdk-3.1.301-linux-arm.tar.gz
- dotnet-sdk-3.1.301-linux-arm.tar.gz file can be downloaded from the following link
https://download.visualstudio.microsoft.com/download/pr/dbf4ea18-70bf-4b0f-ae9c-65c8c88bcadd/115e84fb95170ddeeaf9bdb9222c964d/dotnet-sdk-3.1.301-linux-arm.tar.gz
- ImageService pushled tar.gz file name should be publish.tar.gz

How to run Image Service app
----------------------------
- Open terminal
- Enter into image service installed directory
- Run the following command to start the app
    dotnet ImageServiceApi.dll


