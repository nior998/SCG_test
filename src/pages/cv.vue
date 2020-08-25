<template>
  <div>
    <div class="mashead" :style="{ 'background-image': 'url(' + image + ')' }">
      <div class="container h-80">
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end">
            <h1
              class="text-uppercase text-white font-weight-bold"
            >Napat Jiam</h1>
            <hr id="whitebar" class="divider my-4" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white font-weight-light mb-5">
              Wellcome.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section" style="background:grey;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 justifiy-content-center">
            <img class="profile my-4" :src="require('@/components/image/662A1315+2in.jpg')">
          </div>
          <div class="col-lg-8 text-left">
            <h2 id="headsec2" class="text-white">Objective</h2>
            <hr id="whitebar" class="divider light my-4" />
            <p class="text-white mb-4">
              Working and Developing skills to prepare for incoming change in technology industry
              and multimedia industry.<br>
              Working in multiple jobs especially Software development and Graphic design
              to improve skills and make valuable work for organization.
            </p>
            <h2 id="headsec2" class="text-white">Education</h2>
            <hr id="whitebar" class="divider light my-4" />
            <p class="text-white mb-4">
              Bechelor’s Degree in Computer Engineering<br>
              Srinakharinwirot University GPA 2.73<br>
              Hischool in Science Computer Program<br>
              Triamudomsuksanomklao School
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-scetion" style="background:white;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6">
            <h2 style="margin:0.28rem;">Personal Information</h2>
            <hr class="divider light my-4"/>
            <p class="text-left text-black-50 mb-4">
              Date of Birth : 16 March 1998<br>
              Nationality : Thai
            </p>
          </div>
            <div class="col-lg-3 col-md-6 text-center">
              <i class="fas fa-5x fa-phone"></i>
              <hr class="divider light my-4"/>
              <p class="text-black-50 my-4">+66 61-467-1702</p>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <i class="fas fa-5x fa-envelope"></i>
              <hr class="divider light my-4"/>
              <p class="text-black-50 my-4">napat_nj@outlook.com</p>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <i class="fas fa-5x fa-map-marked-alt text-center"></i>
              <hr class="divider light my-4"/>
              <p class="text-black-50 my-4 text-left">
                43/72
                Ramkhamhaeng 60/2, Ramkhamhaeng Rd.<br>
                Huamark, Bangkapi<br>
                Bangkok 10240</p>
            </div>
        </div>
      </div>
    </div>
    <div class="page-section" style="background:linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%);">
      <div class="container">
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end">
            <h1
              class="text-white md-0"
            >Skills</h1>
            <hr id="whitebar" class="divider light my-10" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 text-center">
              <i class="fab fa-5x fa-html5 my-4" style="color:white;"></i>
              <p class="text-white font-weight-light mb-5">html5</p>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
              <i class="fab fa-5x fa-css3-alt my-4" style="color:white;"></i>
              <p class="text-white font-weight-light mb-5">css3</p>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
              <i class="fab fa-5x fa-vuejs my-4" style="color:white;"></i>
              <p class="text-white font-weight-light mb-5">vue.js</p>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <img class="icon" :src="require('@/components/image/photoshop.svg')">
              <p class="text-white font-weight-light mb-5">Adobe Photoshop</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 text-center">
            <img class="icon" :src="require('@/components/image/ai.svg')">
              <p class="text-white font-weight-light mb-5">Adobe Illustrator</p>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <img class="icon" :src="require('@/components/image/premier.svg')">
              <p class="text-white font-weight-light mb-5">Adobe Premiere pro</p>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <img class="icon" :src="require('@/components/image/after-effects.svg')">
              <p class="text-white font-weight-light mb-5">Adobe After Effects</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section" style="background:white">
      <div class="container">
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end">
            <h1
              class="md-0"
            >Activities</h1>
            <hr class="divider light my-10" />
          </div>
        </div>
        <div class="row my-4">
          <div class="col-lg-4">
            <h2 id="year" class="text-right">2017</h2>
          </div>
          <div class="col-lg-6">
            <p class="text-left">
              Participated in TrueLab Bootcamp 2017<br>
              by True Corporation Public Company Limited
            </p>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-lg-4">
            <h2 id="year" class="text-right">2018</h2>
          </div>
          <div class="col-lg-6">
            <p class="text-left">
              Participated in AI Product and Services design Competition 2018 (Tonkit Project)<br>
              by Industry Transformation Center (ITC) and Plastics Institute of Thailand<br>
              1st winner
            </p>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-lg-4">
            <h2 id="year" class="text-right">2019</h2>
          </div>
          <div class="col-lg-6">
            <p class="text-left">
              Intern in Computer Graphic for commercial video<br>
              at Gimmick Studio Co.,Ltd.
            </p>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-lg-4">
            <h2 id="year" class="text-right">2020</h2>
          </div>
          <div class="col-lg-6">
            <p class="text-left">
              Computer Engineering Project: Car license plate detection for parking management system<br>
              1st runner-up “Creative engineering project”
            </p>
          </div>
        </div>
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end text-center">
            <h1
              class="md-0"
            >Certificates</h1>
            <hr class="divider light my-10" />
          </div>
        </div>
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end text-center">
            <p>TrueLab Bootcamp 2017 Training Certiﬁcate (New Product Development:NPD)</p>
          </div>
        </div>
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end text-center">
            <p>1st winner Certiﬁcate for AI Product and Services design Competition 2018 (Tonkit Project)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap'
import image from '@/components/image/DSCF9324.jpg'
export default {
  name: 'cv',
  props: {},
  data () {
    return {
      image
    }
  }
}
</script>

<style scoped>
.col-sm-8 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: rgba(86, 61, 124, 0.15);
  border: 1px solid rgba(86, 61, 124, 0.2);
}
.col-sm-4 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: rgba(86, 61, 124, 0.15);
  border: 1px solid rgba(86, 61, 124, 0.2);
}
.mashead {
  padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
.icon{
  max-width: 5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  filter: invert(100%);
}
.profile{
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  object-position: 0 0;
  border-radius: 50%;
}
@media screen and (max-width:768px) {
  #year{
  text-align: left !important;
  }
  #headsec2{
    text-align: center;
  }
}
#whitebar{
  border:1px solid white;
}
</style>
