# Maptek Staff Management Utility

This is a staff management web application for Maptek which is an adelaide-based company using Google API. It was developed in Google App Script and Google Sheet. Google sheet is used as database. In Google App Script, JavaScript, CSS and HTML can't be separated. They have to be written in a HTML file.

Only staff accounts have an access to the web, and only authorised staff can edit the staff information. This web shows a org chart and reports including staff detail and gender ratio.

## 1. Common features

### 1.1 Authentication

Only accounts registered in Google Sheet can have access to the program. Provided that unregistered accounts attempt to access the program, the screen will be locked. All pages of this program have this function.

### 1.2 Editor & viewer

All staff are either editors or viewers. Editors can go to all of the pages, while viewers are only allowed to go to the home page, org chart page, staff list page, report page and profile page. Hence, the navigation bar shows different contents (Figure 1.2.1). Provided that viewers attempt to access either the add page or edit page, their screen will be locked. All pages of this program have this function.

<img src = "https://user-images.githubusercontent.com/79579314/131576771-9a605aee-917d-4d59-a28c-f42a0f32ee11.png" width="400px">
Figure 1.2.1 Navigation bar for editors (Left: Home page, Right: Other pages)

## 2. Chart page

### 2.1 Collapsible org chart by person in charge

By selecting the "SEARCH IN THE CHART" option on the homepage of Maptek employees, they can see all the employees' information about Maptek, and display the connections between each employee in the form of a tree diagram. The display of the organization chart depends on the person in charge. The user can select the “person in charge” from the drop-down menu, and then the related sub-charts will be displayed. Different persons in charge will form different sub-charts.

This chart also provides users with a selection of the profile view. If you click on the box of a certain individual, all the subordinate employee information can be collapsed, which would result in a brief view (Figure 2.1.1).

<img src = "https://user-images.githubusercontent.com/79579314/131577141-3c7fc510-4666-4402-b403-3fea7601a32f.png" width="400px">
Figure 2.1.1 Clicking on the information box to collapse

### 2.2 Search filter

As the company structure is apparently large, if users query for a certain person, they have to look through the chart one by one. By applying a search filter, users could search for the information they want, then find the appropriate staff information. Refer to figure 2.2.1, the search box is at the top of the UI, under the main category row.

<img src = "https://user-images.githubusercontent.com/79579314/131577258-039a1c97-6285-4a69-9570-788cda7c7b3d.png" width="400px">
Figure 2.2.1 The search box

The search function is capable of using different data fields as the keyword, e.g. name, phone number, email address, position etc. For example, the user wants to find the CEO, and then he/she searches by the keyword CEO, the result is shown in figure 2.2.2:

<img src = "https://user-images.githubusercontent.com/79579314/131577366-4f39e80b-65c7-47a6-93a9-fb5d4a77a107.png" width="400px">
Figure 2.2.2 Search filter

After performing the search, users can then click the “Profile” button to get more comprehensive information about the staff.

### 2.3 Popping up staff detail & highlighting a box on the org chart

There are two ways to show up the staff details. One is to right click on the box of each person's information box (Figure 2.3.1), and the other one is to click the Profile button on the filtered result (Figure 2.3.2). We can search for the name of the person who wants to view the profile at the top left of the search interface, by first name, last name or full name, then the searched person and his corresponding department information will be displayed along with his name at the bottom of the search. Below its name, there is also the Profile button, as shown in Figure 2.3.2. When we click on it, a small interface will pop up and the relevant box on the chart will be highlighted (Figure 2.3.3).

The information displayed here includes his name, gender, year of employment, contact information, address, department and email address. When we click anywhere outside of this small interface with the mouse, we will return to the current search interface and we can select other functions or keep searching.

<img src = "https://user-images.githubusercontent.com/79579314/131577479-185d57fa-9f3a-4f4b-9a3a-bde77527968c.png" width="400px">
Figure 2.3.1 More information showed by right click

<img src = "https://user-images.githubusercontent.com/79579314/131577564-7124552c-d2f4-4cd4-b983-fc603bd41699.png" width="400px">
Figure 2.3.2  The profile button on the filtered result

<img src = "https://user-images.githubusercontent.com/79579314/131577629-f0fd4132-0357-4945-88f6-9bef73d9bad9.png" width="400px">
Figure 2.3.3 Profile & highlighted box

### 2.4 Zoom-in & zoom-out

As shown in Figure 2.4.1, in the search function, the zoom in & out function is added to improve the user experience. When employee information is added to a large number, the employee’s name will be small and it is not easy for the user to check clearly. At this time, you can click the zoom in button, and then drag the mouse to find the employee you want to view.

<img src = "https://user-images.githubusercontent.com/79579314/131577710-849c30a8-4c31-4432-bd3b-62f20df8358f.png" width="400px">
Figure 2.4.1 Zoom In and Zoom out buttons

## 3. List Page

### 3.1 Search filter

Similar to the chart page, the list page also accepts users to have different data fields as input. After performing the search, the staff list will be filtered. Figure 3.1.1 and Figure 3.1.2 show searches in different fields as input.

<img src = "https://user-images.githubusercontent.com/79579314/131577833-9133ab50-53b9-43e1-8157-6d47f4d56be4.png" width="400px">
Figure 3.1.1 Performing a search by first name

<img src = "https://user-images.githubusercontent.com/79579314/131577872-b7646ee7-219f-409e-8973-6b8b98dbf856.png" width="400px">
Figure 3.1.2 Performing a search by the position

### 3.2 Popping up staff detail

Every staff’s detailed information can be checked by clicking the suggesting option in the filter (Figure 3.2.1). Unlike the function in the Chart page, staff detail will pop up by clicking the left button of the mouse.

<img src = "https://user-images.githubusercontent.com/79579314/131577960-fe345b55-c6d2-4d05-a5df-45406a5a603d.png" width="400px">
Figure 3.2.1 Staff detail information

## 4. Report page

### 4.1 Report of team & building

Maptek users can get information reports about Maptek by selecting the "GENERATE REPORT" option on the home page. The report shows the distribution of Maptek's employees in two ways (Figure 4.1.1). The first method is to classify and display information according to the team to which the employee belongs. The second method is to classify and display information according to the building where the employee is located.

Each of these two methods will show the employee's name, the team (in red), phone number (in green), mailbox number (in green), and the year of entering the company (in red). In addition, in the report, the ratio of male to female employees under the selected category is displayed in a pie chart. The blue part represents male employees, and the red part represents female employees.

<img src = "https://user-images.githubusercontent.com/79579314/131578095-3c3c6e96-8bd8-4830-929a-0a57fb1d2b25.png" width="400px">
Figure 4.1.1 The two filtering method in the report

## 5.Add page

### 5.1 Adding staff

Users can click ‘add staff’ on the homepage to add staff’s personal information, as shown in Figure 5.1.1. After entering the add interface, you can see that the user needs to manually add or slide down the options to need the add details. As shown in figure 5.1.2, the ‘Duplicate check’ button allows users to perform an advance check before adding information to determine whether the user to be added already exists. After the user is added, the new user's information will be automatically updated on the spreadsheet.

<img src = "https://user-images.githubusercontent.com/79579314/131578255-87f5fbd0-d385-49d4-9bc2-31cbd981c6c0.png" width="400px">
Figure 5.1.1 Homepage

<img src = "https://user-images.githubusercontent.com/79579314/131578321-d757773b-402f-4d20-8ca2-af7eaaf0dd12.png" width="400px">
Figure 5.1.2 Duplicate check

## 6.Edit page

### 6.1 Editing staff information

Editors are allowed to access this page and to edit staff information. This page displays the staff information which is the same as the one on the spreadsheet. The editors are able to change their information by directly typing or by selecting from the dropdown menus. After finishing changing the information, the change information can be saved by clicking the Save button in the rightmost column.

### 6.2 Deleting staff

Editors can remove the staff details by clicking the Delete button in the rightmost column. The same information will automatically be deleted from the spreadsheet.

## 7.Profile page

### 7.1 Editing user’s contact details

Staff members can edit their personal information by going to the profile page, which can be accessed by clicking on the “MY PROFILE” button on the home page (Figure 1.2.1 Left), or by clicking the “Profile” button on the right side of the navigation bar.

Inside the profile page (Figure 7.1.1), the user’s own information will automatically appear in the boxes which can be edited. By clicking on the “Update” button, changes will be updated to the spreadsheet and anywhere else the information needs to be displayed.

<img src = "https://user-images.githubusercontent.com/79579314/131578515-3813038f-b6f4-43bd-a122-059edbd73639.png" width="400px">
Figure 7.1.1 Display of the Profile page
