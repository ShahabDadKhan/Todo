<template>
  <v-app>
    <div class="about d-flex align-center flex-column">
      <v-container class="about-card my-5">
        <div class="do d-flex ">
          <div class="D"></div>
          <div class="O d-flex align-center justify-center">
            <div class="check "></div>
            <!-- <v-icon size="200" color="white">mdi-check</v-icon> -->
          </div>
        </div>
      </v-container>
      <!-- <v-container tag="span" white--text text-center
      >This is the most TO-DO app ui kit you've ever seen. yours,for
      free</v-container
    > -->
      <h1 class="white--text font-weight-light my-5 text-uppercase">
        The most versatile <span class="grey">TO-DO</span> app ui kit you've
        ever seen. yours,for free
      </h1>
      <h1 class="white--text font-weight-light my-5 text-uppercase">
        Designed to meet your needs
      </h1>
      <v-btn elevation="4" class="btn  my-4 " to="signin">Start</v-btn>
      <!-- <span 
      ></span
    > -->
    </div>
  </v-app>
</template>

<script>
export default {
  //
};
</script>

<style lang="scss" scope>
.about {
  background-image: url(../img/1.jpg);
  background-size: cover;
  height: 100vh;
  color: gray;
}
.about-card {
  /* background-image: url(../img/2.jpg); */
  /* background-size: cover; */
  /* background-color: aqua; */
  width: 33% !important;
  height: 41%;
}

.do {
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.D {
  width: 200px;
  height: 200px;
  border: 2px solid white;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;

  /* background-color: #fff; */
}

.O {
  width: 200px;
  height: 200px;
  border: 2px solid whitesmoke;
  border-radius: 50%;
  transform: rotate(-40deg);
}

.check {
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  /* border: 2px solid white; */
  margin-bottom: 20px;
  margin-left: 22px;
  width: 95px;
  height: 35px;
}

.grey {
  transform: rotate(-3deg);
  /* transform: rotate(-10deg);
  transition: all 0.2s; */
  display: inline-block;
}

.btn:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in;
  background-color: grey !important;
}
</style>
