<template>
  <div >
    <a-row>
      <a-col :xs="24" :md="18" >
        <div class="project-component-container">
            Overall Risk Guage
        </div>
      </a-col>
      <a-col :xs="24" :md="6" >
        <div class="project-component-container">
            Risk Makeup
        </div>
      </a-col>
    </a-row>

    <a-row >
      <a-col :xs="24" :md="24" >
        <div class="project-component-container">
            Budget Hours
        </div>
      </a-col>
    </a-row>

    <a-row >
      <a-col :xs="24" :md="12" >
        <div class="project-component-container">
            Velocity
        </div>
      </a-col>
      <a-col :xs="24" :md="12" >
        <div class="project-component-container">
            QA Report
        </div>
      </a-col>
    </a-row>

        <a-row >
      <a-col :xs="24" :md="24" >
        <div class="project-component-container">
            Team Morale
        </div>
      </a-col>
    </a-row>

        <a-row >
      <a-col :xs="24" :md="24" >
        <div class="project-component-container">
            Product Manager Comments
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

@media (max-width:720px){
.project-component-container {
    margin: 1.5vh;
 }
}

.project-component-container {
  text-align: center;
  color: white;
  margin-top: 1em;
  background: rgb(60, 119, 146);
  padding: 5px 0;
  margin-left: 1em;
  margin-right: 1em;
}
</style>