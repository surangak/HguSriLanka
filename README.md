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
          <script type="text/javascript" src="../..//moduleResources/hgu/scripts/jspedigrees-view/jspedigrees.nocache.js"></script> <style>
