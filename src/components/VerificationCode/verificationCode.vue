<div class="verification-container">
  <span class="fverification-name">{{label || '验证码'}}</span>
  <div class="verification-input"><input type="text" v-model="inputCode"></div>
  <div class="verification-code"><img :src="verificationImage" @click="getVerificationCode"></div>
</div>
