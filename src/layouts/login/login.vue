<!-- <template lang="html"> -->
  <div class="container">
    <div class="login-container">
      <div class="login-content">
        <h3 class="login-title">测试</h3>
        <form class="login-form" action="">
          <div class="form-item">
            <span class="form-item__name">账号</span>
            <div class="form-item__input"><input type="text" v-model="account"></div>
          </div>
          <div class="form-item">
            <span class="form-item__name">密码</span>
            <div class="form-item__input"><input type="password" v-model="password"></div>
          </div>
          <div class="form-item">
            <span class="form-item__name">验证码</span>
            <div class="form-item__input"><input type="text"></div>
          </div>
          <div class="form-item form-item--center">
            <button class="form-item__button" type="button" @click="login">登陆</button>
            <button class="form-item__button" type="button">重置</button>
          </div>
        </form>
      </div>
    </div>
  </div>
<!-- </template> -->
