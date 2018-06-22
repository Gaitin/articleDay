<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import 'normalize.css';

  * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
    _height: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    text-decoration: none;
    background-color: #F2F2F4;
    overflow: hidden;
    font-size: 16px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
  }
</style>
