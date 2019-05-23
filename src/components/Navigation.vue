<template>
  <a-layout>
    <a-layout-header
      id="app-header"
      :style="{backgroundColor: 'rgb(239, 239, 239)', height: '7.5em',}"
    >
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{backgroundColor: 'rgb(239, 239, 239)' }"
      >
        <a-menu-item
          :style="{fontSize:'2em', color: 'rgb(89, 89, 89)',backgroundColor: 'transparent', lineHeight: '3.25em', float: 'right'}"
        >
          <a-button type="default">Logout</a-button>
        </a-menu-item>

        <a-menu-item
          :style="{fontSize:'2em', color: 'rgb(89, 89, 89)', backgroundColor: 'transparent', lineHeight: '3.5', float: 'left'}"
        >Scrum Machine</a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout-header id="nav-header" :style="{backgroundColor: 'white'}">
      <div class="gutter-example">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">
              <router-link to="/">Risk Dashboard</router-link>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">
              <router-link to="/projectdetails">Projects</router-link>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">
              <router-link to="/">Reports</router-link>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">
              <router-link to="/">Account Info</router-link>
            </div>
          </a-col>
        </a-row>
      </div>
      <!-- </a-menu> -->
    </a-layout-header>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: true
    };
  }
};
</script>

<style>
.ant-menu-horizontal {
  border-bottom: transparent;
}
.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  text-align: center;
  color: rgb(89, 89, 89);
  font-size: 1.5em;
  padding: 5px 0;
}
.ant-menu {
  margin-top: 100px;
}
.gutter-box > a {
  text-decoration: none;
  color: rgb(89, 89, 89);
}
.gutter-box > a:hover {
  color: rgb(145, 143, 143);
}
#nav-header {
  box-shadow: 0 4px 2px -2px rgb(212, 212, 212);
}
#app-header {
  box-shadow: 0 4px 2px -2px rgb(212, 212, 212);
  z-index: 1;
}
</style>