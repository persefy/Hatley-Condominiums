# Hatley-Condominiums
Fictional condominiums complex information website listing available units, style of units, and contact information

## Description: 
Condominiums complex information website listing available units, style of units, and contact information

## ERD 
![image](https://github.com/persefy/Hatley-Condominiums/assets/17712788/7cb8a028-7573-4417-b69a-9b4db5ccb786)

## Front End Wireframes
### Index 
![image](https://github.com/persefy/Hatley-Condominiums/assets/17712788/893f4672-31b3-4469-9e67-97a154f1ff66)
### About 
![image](https://github.com/persefy/Hatley-Condominiums/assets/17712788/572c0d15-94ad-4a5e-9b92-5e933b7b26e8)
### Available Units 
![image](https://github.com/persefy/Hatley-Condominiums/assets/17712788/82ba21be-4d86-47e1-8969-cec43700a84e)
### Unit Styles 
![image](https://github.com/persefy/Hatley-Condominiums/assets/17712788/ab070d7f-80a8-4f3a-83ef-dc8e385f3df4)
### Contact
![image](https://github.com/persefy/Hatley-Condominiums/assets/17712788/f040aaa8-ace9-4d6c-8f1b-69840f2974af)

## User Stories
#### MVP:

1. As a data admin, I want to be able to track data on the Condo Reps, Condo Units, Condo Styles
  - Entities: Condo Reps, Condo Units, Condo Styles
2. As a data admin, I want to be able to create, read, update, and delete data for all of the entities that I'm tracking.
  - CRUD in backend for condo reps, condo units, condo styles
3. As an end user, I want access to navigation buttons at the top of screen to help me navigate to all the pages in the website.
  - Navigation bar at the top of all the pages: 'About', 'Units Available', 'Unit Styles', 'Contact'
4. As an end user, I want to access the information for the condominium complex in a way that the information is easy to access and organized intuitively.
  - Pages: About, Units Available, Styles, Contact
5. As an end user, I want to be able to view and sort through a list of all available condo units based on my criteria.
  - **Units Available page** will be filtered to show only units marked as available and have sorting by: **rent**, **square footage**, **bed**, **baths**,    **location**, **parking**, **acceptsPets**
6. As an end user, I want to be able to view and sort through the unit styles offered in the condo complex.
  - **Unit Styles** page will have list the unit styles and have **sorting** by **space score** (1,2, or 3, with 3 having the most space)
7. As an end user, I want to be able to learn more about the condo complex and amenities.
  - The **About** page will display location specific features based on selection of **location**
  
#### Stretch Goals:
8. As an end user, I want additional filters by which I can further narrow down the units available listings to help me identify the units that meet my criteria.
  - Add sorting to **Units Available** page by **rep**, and **style**
9. As an end user, I want to easily find the correct representative contact information by filtering based on known unit number of unit features.
  - Add form to **Contact** page that displays correct contact rep based on either **unit number** or **bedroom count**
10. As an end user, I want to be able to see a dedicated page for each unit that I select from the **Available Units** page or from the **Contact** page.
  - Add full page for each unit available
11. As an end user, I want to see high quality floor plans for each unit style.
  - custom images for styles
