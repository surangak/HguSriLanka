# HguSriLanka
Inside the HGU folder there is the source code for the hgu module which holds the reource files needed for the jspedigree drawing tool.

You can simply add this module to the modules folder which inside the app folder.

Steps to build

1. Go to the root fodler and run a mvn clean install
2. Go to the target folder and copy the omod file created
3. Copy the file to the Modules folder inside App Data Folder
4. Re Deploy OpenMRS
5. In order to get the funcationality, use the following code at the beginning of the HTML form

          <script type="text/javascript" src="../../moduleResources/hgu/scripts/jspedigrees/jspedigrees.nocache.js"></script>
          <script type="text/javascript" src="../..//moduleResources/hgu/scripts/jspedigrees-view/jspedigrees.nocache.js"></script> 
          
6. You can look at how the jspedigree has been loaded in to the html form when you look at the "html_form.html" file. There you will come across a sction within an id named pedigree. That is the part which generates the drawing tool.

Wiki Page : https://wiki.openmrs.org/display/~akshika47/Human+Genetics+Unit+Module
Blog Post Links : 
Week 1 : http://akshikaspace.blogspot.com/2016/06/google-summer-of-code-2016-upgrade-data.html?view=flipcard
Week 2 : http://akshikaspace.blogspot.com/2016/06/google-summer-of-code-2016-upgrade-data_6.html?view=flipcard
Week 3 : http://akshikaspace.blogspot.com/2016/06/google-summer-of-code-2016-upgrade-data_97.html?view=flipcard
Week 4 : http://akshikaspace.blogspot.com/2016/06/google-summer-of-code-2016-upgrade-data_62.html?view=flipcard
Week 5 : http://akshikaspace.blogspot.com/2016/07/google-summer-of-code-2016-upgrade-data.html?view=flipcard
