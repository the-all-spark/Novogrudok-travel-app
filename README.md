# Novogrudok-travel-app, promo site of travel app (HTML | CSS | JS)

[Switch to Russian | Переключиться на русский](./README-ru.md)

## About the project
A promotional page for the Novogrudok tourist app, describing its strengths and providing information about the city.

**Tools:**
![image](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white "Visual Studio Code")
![image](./images/logo_animate.png "Adobe Animate")

**Stack:**  
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white "HTML") 
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white "CSS") 
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E "JS") 
![image](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white "jQuery") 

**Demo:** [Link](https://the-all-spark.github.io/Novogrudok-travel-app/)  
![screenshot](./images/site_screenshot.jpg "Site screenshot")

## Realized functionality:
1. site preloader in the animation format (Adobe Animate CC);
2. sound control panel (buttons to play music, pause, mute, increase and decrease volume) (JS);
3. slider with mobile application screens (JS);
4. survey-test in the “Where should I go?” block (JS) - as the result the test gives the name of the city and its image:
   - if no item is selected, the form cannot be submitted and cleared;
   - if at least one item is selected, the warning message is deleted, “Submit” and “Reset” buttons become active;
   - an opened form can be closed by clicking on the “cross” icon in the upper right corner (in this case, if the form was filled in earlier, it is cleared); 
   - clicking on the “Reset” button will deselect the survey items; 
   - after closing the result, you can take the survey again by clicking on the “Reset” icon.
5. “Ask a question” feedback form (validation using jQuery library). After submitting the form, a "thank" message is displayed.
6. integrated Yandex-map with marked city Novogrudok on it (HTML);
7. integrated advertising banner (Adobe Animate CC);
8. responsive layout (for screen widths from 1920 px to 350 px) (CSS).