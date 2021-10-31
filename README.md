# SMEC-Hackathon

Reference id for team : 6hCLEGO9Sf

Team Name: SMEC Hackathon

## How It Works

### UIDAI Authentication
This is a sample interface of how the UIDAI Website looks like. This will be used to generate the XML File for it to be uploaded during booking of an application. 

### Booking
This is a sample Interface that is used During the booking of Airport / Stadium / Railway Station / Hotel. Here you will be needed to upload the XML File that will be obatained from the UIDAI website (uidai-auth folder). This will also provide you with a QR Code which will be used to find the zip file (containing XML File) during the time of check-in.

### Face-Recognition
This is the verifier side file that will be used to verify the user at the time of check-in. It scans the QR Code that was provided to the user during registration. It will then scan the face and compare it with the one provided in the Aadhaar Card (Taken from the XML File and decoded from base64). It will return True/False saying if the user is verified/not verified respectively. The program runs on Google Colab and requires the use of few libraries which are provided in the first cell of the code.

## Requirements

1. Nodejs
2. Ionic
3. React
4. Google Colab (Browser)
5. Packages mentioned in Google Colab. (Contains installation commands)
