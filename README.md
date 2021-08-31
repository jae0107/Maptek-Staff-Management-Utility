# Maptek Staff Management Utility

This is a staff management web application for Maptek which is an adelaide-based company using Google API. It was developed in Google App Script and Google Sheet. Google sheet is used as database. In Google App Script, JavaScript, CSS and HTML can't be separated. They have to be written in a HTML file.

Only staff accounts have an access to the web, and only authorised staff can edit the staff information. This web shows a org chart and reports including staff detail and gender ratio.

## 1. Common features

### 1.1 Authentication

Only accounts registered in Google Sheet can have access to the program. Provided that unregistered accounts attempt to access the program, the screen will be locked. All pages of this program have this function.

### 1.2 Editor & viewer

All staff are either editors or viewers. Editors can go to all of the pages, while viewers are only allowed to go to the home page, org chart page, staff list page, report page and profile page. Hence, the navigation bar shows different contents. Provided that viewers attempt to access either the add page or edit page, their screen will be locked. All pages of this program have this function.

<img src = "https://user-images.githubusercontent.com/79579314/131576771-9a605aee-917d-4d59-a28c-f42a0f32ee11.png" width="400px">
Figure 1.2.1 Navigation bar for editors (Left: Home page, Right: Other pages)
