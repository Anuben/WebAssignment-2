
// File name: app.js
// Author's name: Anuben Keshavala
// Web site name: Home Page 


"use strict";

// IIFE -Immediately Ivoked Function Expression
(function(){
    
    let title = document.title.toLowerCase();

    function highlightActiveLink() 
    {
        //console.log(`The title of the page is ${title}`);

        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) 
        {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);

            if ((title === "home") && (anchorString === "index") || (title === anchorString)) 
            {
                anchor.className = "nav-link active";
            }
        }

        return title;
    }

    function addParagraphsToJumbotron() 
    {
        // step 1 hook into the spot (element) on the page
        let jumbotron = document.getElementsByClassName("jumbotron")[0];

        if (jumbotron) 
        {
            // step 2 create a new element
            let firstDiv = document.createElement("div");
            let firstParagraph = document.createElement("p");
            let secondParagraph = document.createElement("p");
            let thirdParagraph = document.createElement("p");
            let fourthParagraph = document.createElement("p");

            // step 3 configure the new element
            
            switch (title) {
                case "home":
                    firstDiv.innerHTML =
                `                
                <p>
                    My name is AnubenKeshavala. You can call me Anu. I completed my bachelor in commerce in my backhome. Now, i am a student of the Software Engineering Technology Program at Centennial College. This
                    is my second semester .
                </p>
                <p>
                                                           <b align="right">Mission Statement:</b>
                <P>
                My mission is to deliver the best possible reliable software solutions to help the communities 
                        to  improve IT efficiency and business profitability.
               <P></p>
               <p> <b> Favourite Quote: </b>
               <P>
               " You may never know what results come of your actions, but if you do nothing, there will be no results. " ~ Mahatma Gandhi

            
               <P></p>
                
                <p align="right">
                    <img width="230" src="./Assets/Anila.png">
                </p>
                `;
                    break;
                case "projects":
                    firstDiv.innerHTML =
                    `                
                    <p>
                        Here is my three different projects which i made in my first semester in COMP213 with the help of html and css styles in text pad and microsoft expression web 4.
                    </p>
                    <p>
                        <b>Real Estate page: </b>In this part of the project, my aim 
                        is to provide the detail information of the project that i have 
                        completed. In this page, i am going to provide the projects that 
                        i have completed. Thes projects are fully completed by me. So, 
                        here, i am going to provide the link of the projects and the 
                        tasks that i completed.<a href="http://studentweb.cencol.ca/akeshav4/comp213/homepage.html"></a></p>
                    <p align="right">
                    <img src="Assets/chrome_rpBIdbeiSC.png" height="500" width="1050"><span lang="en-ca">&nbsp;</span></td> 
                    
                    </p>
                    <p>
                    <b>Protected Planet: </b> My second project is about the Protected Planet. I made about Lake Superior National Marine Conservation Area.
                    I highlited the  Activities and experiences of that place and calender of  events.
                    </p>
                    <p align="right">
                    <img src="Assets/chrome_SY77SpQvQr.png" height="500" width="1050"><span lang="en-ca">&nbsp;</span></td>
                    </p>
                    <p>
                        <b>Instructor evaluation form: </b> My Third project is about questionnaire on course 
                        instructor evaluation form. Here, i have prepared thirteen 
                        Questionnaires. These Questions also being divided in to several 
                        parts. i.e. About Instructor, course, general information and 
                        the comments fields. Please go through the links to find the 
                        details.
                    </p>
                    <p align="right">
                    <img src="Assets/chrome_Cb7I3wAiDe.png" height="500" width="1050"><span lang="en-ca">&nbsp;</span></td> 
                    </p>                    
                    `;
                        break;
                default:
                    break;
            }           
            
            // step 4 attach the new element
            jumbotron.appendChild(firstDiv);

            // back to step 2 - create a new element
            let newDiv = document.createElement("div");

            // step 3 - configure    

            // step 4 attach the new element
            jumbotron.appendChild(newDiv);


            return true;

        }

        return false;
    }
    
    // named function
    function Start()
    {
       console.log('%cApp Started...', "color:Black; font-size: 24px;");   

       let title = highlightActiveLink();

       let success = addParagraphsToJumbotron();

       if(success) 
       {
        console.log("successfully added paragraphs to jumbotron");
       }
       else
       {
        console.warn("content not added to jumbotron - does not exist");
       }

    } 

    window.addEventListener("load", Start);
})();


