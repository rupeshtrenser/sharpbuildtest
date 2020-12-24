## Cloud Kiosk Client (Linux installer)

Installation prerequisite for fresh raspberry PI OS
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
These are the installer configurations used in config.js 


- installation_path - Installation path of cloud kiosk client
- required_space - Required space in MB
- applicationUrl - Cloud Kiosk Client application URL
- imageServicesBaseUrl - Base URL of the image service
- processedImagePath - Processed image folder path
- cloudUploadBaseUrl - Base URL of the cloud upload service
- mediaReaderServerBaseUrl - Base URL of  the media reader server 
- ffApiLicenseKey - FujiFilm I2/IO library API license key
- wifiSmbSharePath - SMB share directory
- dhcpStaticIp - DHCP static IP to use 
- dhcpRange - dnsmasq DHCP ip range
- ssid -SSID of the softAP (hostapd)
- passPharse - Pass pharse of the softAP

To build cloud kiosk client
------------------------
- Enter into cloud-kiosk-client directory
- To build run following command
    npm run dist
- Enter into app.asar directory
- Unpack app.asar using the following command
    npx asar extract app.asar destfolder 
- Rename destfolder(app.asar extracted folder) to app.asar
- Rename unpacked package folder to cloud-kiosk-client
- Compress cloud-kiosk-client folder to tar.gz file format using the following command
    tar -czvf cloud-kiosk-client.tar.gz cloud-kiosk-client
