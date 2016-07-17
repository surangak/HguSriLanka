<!--
  ~ The contents of this file are subject to the OpenMRS Public License
  ~ Version 1.0 (the "License"); you may not use this file except in
  ~ compliance with the License. You may obtain a copy of the License at
  ~ http://license.openmrs.org
  ~
  ~ Software distributed under the License is distributed on an "AS IS"
  ~ basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
  ~ License for the specific language governing rights and limitations
  ~ under the License.
  ~
  ~ Copyright (C) OpenMRS, LLC.  All Rights Reserved.
  -->
 
<htmlform formUuid="a000cb34-9ec1-4344-a1c8-f692232f6edd" formName="Vitals" formEncounterType="67a71486-1a54-468f-ac3e-7091a9a79584" formVersion="1.0">
<script>
window.pedexIsReady = function() {
console.log("ready oh ready");
var x = "PFBlZEV4PjxQZXJzb24gSWQ9IjEiIFNleD0iMiIgQWZmZWN0aW9uPSIxIiBGYXRoZXI9IjAiIE1vdGhlcj0iMCIvPjxQZXJzb24gSWQ9IjIiIFNleD0iMSIgQWZmZWN0aW9uPSIxIiBGYXRoZXI9IjAiIE1vdGhlcj0iMCIvPjxQZXJzb24gSWQ9IjMiIFNleD0iMSIgQWZmZWN0aW9uPSIxIiBGYXRoZXI9IjIiIE1vdGhlcj0iMSIvPjxQZXJzb24gSWQ9IjQiIFNleD0iMiIgQWZmZWN0aW9uPSIxIiBGYXRoZXI9IjAiIE1vdGhlcj0iMCIvPjxQZXJzb24gSWQ9IjUiIFNleD0iMSIgQWZmZWN0aW9uPSIxIiBGYXRoZXI9IjMiIE1vdGhlcj0iNCIvPjxQZXJzb24gSWQ9IjYiIFNleD0iMSIgQWZmZWN0aW9uPSIxIiBGYXRoZXI9IjMiIE1vdGhlcj0iNCIvPjxQZXJzb24gSWQ9IjciIFNleD0iMSIgQWZmZWN0aW9uPSIxIiBGYXRoZXI9IjMiIE1vdGhlcj0iNCIvPjxQZXJzb24gSWQ9IjgiIFNleD0iMiIgQWZmZWN0aW9uPSIxIiBGYXRoZXI9IjAiIE1vdGhlcj0iMCIvPjxQZXJzb24gSWQ9IjkiIFNleD0iMiIgQWZmZWN0aW9uPSIxIiBGYXRoZXI9IjciIE1vdGhlcj0iOCIvPjxQZXJzb24gSWQ9IjEwIiBTZXg9IjIiIEFmZmVjdGlvbj0iMSIgRmF0aGVyPSI3IiBNb3RoZXI9IjgiLz48L1BlZEV4Pg==";

setTimeout(function() {
window.setStateXML(atob(x));
}, 1200);

}
</script>
<script type="text/javascript" src="../../moduleResources/hgu/scripts/jspedigrees/jspedigrees.nocache.js"></script>
          <script type="text/javascript" src="../../moduleResources/hgu/scripts/jspedigrees-view/jspedigrees.nocache.js"></script> <style>
        #calculated-bmi {
            font-weight: bold;
            font-size: 1.4em;
        }
 
        .encounter-summary-container #calculated-bmi {
            font-size: 1em;
            font-weight: normal;
        }
#clinicians_name > input{
width:200px;
}
    </style>

    <!-- only show BMI if patient is more than 5 years old (on the encounterDate) -->
    <includeIf velocityTest="$patient.getAge($encounter.getEncounterDatetime()) > 5">
         <script  type="text/javascript">var ctx = "${pageContext.request.contextPath}"</script>
         <script type="text/javascript">
            var calculateBmi = function(wt, ht) {
                var bmi = null
                if (wt &amp;&amp; ht) {
                    bmi = wt / ((ht/100) * (ht/100));
                }
                return bmi ;
            }
        </script>
 
        <ifMode mode="ENTER">
            <script type="text/javascript">
 
                // functions to handle updating the bmi when in ENTER mode
                var updateBmi = function() {
                    var wt = htmlForm.getValueIfLegal('weight.value');
                    var ht = htmlForm.getValueIfLegal('height.value');
 
                    var bmi = calculateBmi(wt, ht);
 
                    if (bmi == null || isNaN(bmi)) {
                        jq('#calculated-bmi-wrapper').hide();
                    } else {
                        jq('#no-calculated-bmi').hide();
                        jq('#calculated-bmi-wrapper').show();
                        jq('#calculated-bmi').html(bmi.toFixed(1));
                        jq('#hidden-calculated-bmi').val(bmi.toFixed(1));
                    }
                };
 
                jq(function() {
                    jq('#calculated-bmi-wrapper').hide();
 
                    getField('weight.value').change(updateBmi)
                    getField('height.value').change(updateBmi);
 
                    updateBmi();
                });
               
                jq(function() {
                    jq('#bp_systolic input[type=text]').attr('min', '50');
                });
               
                jq(function() {
                    jq('#bp_diastolic input[type=text]').attr('min', '30');
                });
            </script>
        </ifMode>
 
        <script>
            // set the blood pressure fields as "expected"
            jq(function() {
                jq('#bp_systolic > input').addClass('expected');
                jq('#bp_diastolic > input').addClass('expected');
            });
        </script>
 
        <ifMode mode="VIEW">
            <script type="text/javascript">
 
                // handle displaying the bmi when in VIEW mode
                jq(function() {
 
                    // we have to iterate through in case there are multiple vitals forms
                    // displayed on a single page
 
                    jq('htmlform').each(function(index, form) {
                        jq(form).find('#calculated-bmi-continue').hide();
                        jq(form).find('#no-calculated-bmi').hide();
 
                        var wt = jq(form).find('#weight').find('.value').text();
                        var ht = jq(form).find('#height').find('.value').text();
 
                        var bmi = calculateBmi(wt, ht);
 
                        if (bmi != null &amp;&amp; !isNaN(bmi)) {
                            jq(form).find('#calculated-bmi-wrapper').show();
                            jq(form).find('#calculated-bmi').html(bmi.toFixed(1));
                            jq(form).find('#hidden-calculated-bmi').val(bmi.toFixed(1));
                        }
                    });
 
                });
 
            </script>
        </ifMode>
 
    </includeIf>
 
    <div class="hidden" id="encounter-details" sectionTag="section" headerStyle="title" headerLabel="Encounter Details">
        <fieldset>
            <legend>When?</legend>
            <label>When?</label>
 
            <encounterDate default="now" showTime="false"/>
        </fieldset>
 
        <fieldset>
            <legend>Who?</legend>
            <label>Who?</label>
 
            <encounterProviderAndRole default="currentUser" encounterRole="240b26f9-dd88-4172-823d-4a8bfeb7841f" required="true"/>
        </fieldset>
 
        <fieldset>
            <legend>Where?</legend>
            <label>Where?</label>
 
            <encounterLocation default="SessionAttribute:emrContext.sessionLocationId"/>
        </fieldset>
    </div>
 
    <section id="provider_section" sectionTag="section" headerStyle="title" headerCode="Provider">
   
        <fieldset>
   <legend>provider</legend>
            <h3>provider</h3>
 
            <p class="left">
                <obs conceptId="CIEL:5090" id="provider" />
            </p>
 
        </fieldset>
 
                
    </section>
   
   
    <section id="refereed_by_section" sectionTag="section" headerStyle="title" headerCode="Refereed bye">
   
        <fieldset>
            <legend>Clinicians Name</legend>
            <h3>Clinicians Name</h3>         
            <p class="left">
                <obs conceptId="CIEL:5090" id="clinicians_name"/>
            </p>
        </fieldset>

       <fieldset>
            <legend>Specialty</legend>
            <h3>Specialty</h3>         
            <p class="left">
                <obs conceptId="CIEL:5090" id="specialty"/>
            </p>
        </fieldset>

       <fieldset>
            <legend>Station</legend>
            <h3>Station</h3>         
            <p class="left">
                <obs conceptId="CIEL:5090" id="station"/>
            </p>
        </fieldset>
       <fieldset>
            <legend>Contact Number</legend>
            <h3>Contact Number</h3>         
            <p class="left">
                <obs conceptId="CIEL:5090" id="contact_number"/>
            </p>
        </fieldset>
       <fieldset>
            <legend>Indication</legend>
            <h3>Indication</h3>         
            <p class="left">
                <obs conceptId="CIEL:5090" id="indication"/>
            </p>
        </fieldset>        
    </section>
   
  <section id="family_tree_section" sectionTag="section" headerStyle="title" headerCode="Family Tree">
  </section>
  
<section id="clinicians_notes_section" sectionTag="section" headerStyle="title" headerCode="Clinicians Notes">

 <fieldset>
            <legend>Clinicians Note</legend>
            <h3>Clinicians Note</h3>         
            <p class="left">
                <obs conceptId="CIEL:5090" id="clinicians_notes"/>
            </p>
        </fieldset>

  </section>
  
<section id="management_section" sectionTag="section" headerStyle="title" headerCode="Management">

      <fieldset>
            <legend>Counselling Notes</legend>
            <h3>Counselling Notes</h3>         
            <p class="left">
                <obs conceptId="CIEL:5090" id="Counselling Notes"/>
            </p>
        </fieldset>


      <fieldset>
            <legend>Tests</legend>
            <h3>Tests</h3>         
            <p class="left">
               <obs conceptId="CIEL:5090"  labelText="Tests" answers="0,1,2" answerLabels="Test1,Test2,Test3" style="dropdown"/>
               
               <!-- 
              Should add the feature to add multiple tests
               -->
            </p>
        </fieldset>
   
</section>
 
<section id="samples_section" sectionTag="section" headerStyle="title" headerCode="Samples">

 <fieldset>
            <legend>Samples</legend>
            <h3>Samples</h3>         
            <p class="left">
                 <h4>Report is Ready</h4>
                <obs conceptId="CIEL:5090" labelText="Education" answers="0,6,8" answerLabels="None,1-6,7-8" style="radio"/>
                 <h4>Patient informed</h4>
               <obs conceptId="CIEL:5090" labelText="" answers="0,1" answerLabels="Yes,No" style="radio"/>
                <h4>Report has been issued to the patient</h4>                 
                 <obs conceptId="CIEL:5090" labelText="" answers="0,1" answerLabels="Yes,No" style="radio"/>
          </p>
        </fieldset>

 </section>

<section id="next_visit_notes_section" sectionTag="section" headerStyle="title" headerCode="Next Visit Notes">

 <fieldset>
            <legend>Next Visit Date</legend>
            <h3>Next Visit Date</h3>         
            <p class="left">
                 <encounterDate default="today"/>
            </p>
        </fieldset>
 <fieldset>
            <legend>Counselling Notes</legend>
            <h3>Counselling Notes</h3>         
            <p class="left">
                <obs conceptId="CIEL:5090" id="Counselling Notes"/>
            </p>
        </fieldset>

 <fieldset>
            <legend>XML value</legend>
            <h3>XML value</h3>         
            <p class="left">
                <obs conceptId="162826" id="XML value"/>
            </p>
        </fieldset>
 </section>
<section id="pedigree" sectionTag="section" headerStyle="title" headerCode="Pedigree Drawing">

 <fieldset>
       <legend>Pedigree Drawing Tool</legend>
      <table>
      <tr><td ><b>5.0 Family History</b> </td><td></td></tr>
       <tr><td>5.2 Pedigree chart (Please draw a 3 generation pedigree and indicate affected members if known)</td><td></td></tr>
       <tr><td colspan="2"  id="jsPedigreesContainer" height="600px" width="200px"></td></tr>
       </table>
</fieldset>
 </section>

 <submit/>
 
</htmlform>