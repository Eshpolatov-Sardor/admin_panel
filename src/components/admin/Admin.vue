<script setup lang="ts">
import { ref } from 'vue'
import Settings from './panel/Settings.vue'
import Dashboard from './panel/Dashboard.vue'
import Maps from './panel/Maps.vue'
import Logout from './panel/Logout.vue'
import Analytics from './panel/Analytics.vue'
const activeTab = ref('tab1')

let propfilename: any = null
const storedTodos = localStorage.getItem('todos')
if (storedTodos) {
  propfilename = JSON.parse(storedTodos)
}

const switchTab = (tab: string) => {
  activeTab.value = tab
}
</script>

<template>
  <div class="admin-panel">
    <div class="navbar">
      <div class="profile">
        <img src="https://via.placeholder.com/40" alt="Profile Picture" />
        <span class="profile-name"
          >{{ propfilename[0].firstName }} <br />
          {{ propfilename[0].lastName }}</span
        >
      </div>
      <div class="icons">
        <div class="icon icon-notification">
          <img
            style="border-radius: 15px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_c_DTBpUpkI22vF3FyXfXN2CcBU4tUl5uEw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1HQs3HQUaE7BPDH7GrrTlq1lKrK154hwU1b3Q07QrKjbWxWIyN0Dp3hPnGC1aeyxHgM&usqp=CAUhttps://png.pngtree.com/png-clipart/20190705/original/pngtree-notification-vector-icon-png-image_4236973.jpg"
            alt="Notification"
          />
          <span>1</span>
        </div>
        <div class="icon">
          <img
            style="border-radius: 15px"
            src="https://c8.alamy.com/comp/2R2HFW5/setting-icon-vector-cog-settings-icon-symbol-2R2HFW5.jpg"
            alt="Settings"
          />
        </div>
        <div class="search-icon">
          <img
            style="border-radius: 15px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zWt4uExl5RaPrnRuggMkJPKpkKZsxz7dGw&s"
            alt="Search"
          />
        </div>
      </div>
    </div>
    <div class="slidebar">
      <ul>
        <li :id="activeTab === 'tab1' ? 'active' : ''">
          <a href="#" @click.prevent="switchTab('tab1')">
            <i class="fa fa-tachometer"></i> Dashboard
          </a>
        </li>
        <li :id="activeTab === 'tab2' ? 'active' : ''">
          <a href="#" @click.prevent="switchTab('tab2')">
            <i class="fa fa-eyedropper"></i> Analytics
          </a>
        </li>
        <li :id="activeTab === 'tab3' ? 'active' : ''">
          <a href="#" @click.prevent="switchTab('tab3')">
            <i class="fa fa-pencil"></i> Typography
          </a>
        </li>
        <li :id="activeTab === 'tab4' ? 'active' : ''">
          <a href="#" @click.prevent="switchTab('tab4')">
            <i class="fa fa-picture-o"></i> Maps
          </a>
        </li>
        <li :id="activeTab === 'tab5' ? 'active' : ''">
          <a href="#" @click.prevent="switchTab('tab5')">
            <i class="fa fa-file-video-o"></i> Settings
          </a>
        </li>
        <li :id="activeTab === 'tab6' ? 'active' : ''">
          <a href="#" @click.prevent="switchTab('tab6')">
            <i class="fa fa-wrench"></i> Logout
          </a>
        </li>
      </ul>
    </div>

    <div class="main">
      <div v-if="activeTab === 'tab1'" id="tab1">
        <h2 class="header"><Dashboard /></h2>
      </div>
      <div v-if="activeTab === 'tab2'" id="tab2">
        <h2 class="header"><Analytics /></h2>
      </div>
      <div v-if="activeTab === 'tab3'" id="tab3">
        <h2 class="header">Typography</h2>
      </div>
      <div v-if="activeTab === 'tab4'" id="tab4">
        <h2 class="header"><Maps /></h2>
      </div>
      <div v-if="activeTab === 'tab5'" id="tab5">
        <h2 class="header"><Settings /></h2>
      </div>
      <div v-if="activeTab === 'tab6'" id="tab6">
        <h2 class="header"><Logout /></h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f1f1f1;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
}
.navbar {
  background-color: #009dd9;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  width: 100%;
}

.profile {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-name {
  color: white;
  font-size: 16px;
}

.icons {
  display: flex;
  align-items: center;
}

.icon {
  margin-left: 20px;
  position: relative;
  color: #b5b5b5;
}

.icon-notification {
  position: relative;
}

.icon-notification span {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: orange;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  padding: 2px 6px;
}

.icon img {
  width: 24px;
  height: 24px;
}

.search-icon {
  margin-left: 20px;
}

.search-icon img {
  width: 24px;
  height: 24px;
  filter: grayscale(100%);
}
.admin-panel {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  position: relative;
}

.slidebar {
  width: 10%;
  float: left;
  background-color: #111;
  height: 100vh;
  position: fixed;
  top: 67px;
  left: 0;
}

.slidebar ul {
  position: relative;
  height: 100%;
}

.slidebar a {
  color: #bbb;
  text-decoration: none;
}
.slidebar li {
  text-align: center;
  padding: 0x 0px;
}

ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
  margin: 0;
  position: relative;
  text-align: center;
  color: #b3b3b3;
}
.slidebar i {
  display: block;
  text-align: center;
  color: #b3b3b3;
  font-size: 40px;
  margin-bottom: 8px;
}

.slidebar ul a {
  color: #b3b3b3;
  text-decoration: none;
  box-sizing: border-box;
  display: block;
  text-transform: capitalize;
  padding: 20px;
}
.slidebar li:hover a,
li#active {
  background-color: #313131;
}
.slidebar li:hover i,
li#active i {
  color: #17bce8;
}
.slidebar li:focus i {
  color: #17bce8;
}

.main {
  float: left;
  width: 91%;
  background-color: rgb(60, 57, 57);
  margin-left: 150px;
  margin-top: 68px;
}

.main h2 {
  margin: 1em 30px;
  color: #17bce8;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #bbb;
  padding: 0px 0px 20px 0px;
}
@media only screen and (max-width: 600px) {
  .slidebar {
    width: 30%;
    height: calc(65vh);
    border-right: 20px;
  }
}
</style>
