<template>
  <div >
    <a-row>
      <a-col :xs="24" :md="8" >
        <div class="component-container">
            Low Risk
        </div>
      </a-col>
      <a-col :xs="24" :md="8" >
        <div class="component-container">
            Medium Risk
        </div>
      </a-col>
      <a-col :xs="24" :md="8" >
        <div class="component-container">
            High Risk
        </div>
      </a-col>
    </a-row>

    <a-row>
      <a-col :xs="24" :md="24" >
        <div class="component-container">
            Big Ole Grid 
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
.component-container {
    margin: 1.5vh;
 }
}

.component-container {
  text-align: center;
  color: white;
  margin-top: 1em;
  background: rgb(116, 92, 105);
  padding: 5px 0;
  margin-left: 1em;
  margin-right: 1em;
}
</style>