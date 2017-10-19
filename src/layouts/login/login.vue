  <div class="container">
    <div class="login-container">
      <div class="login-content">
        <h3 class="login-title">测试</h3>
        <form class="login-form" action="">
          <div class="form-item">
            <span class="form-item__name">账号</span>
            <div class="form-item__input"><input type="text" v-model="account" placeholder="请输入账号"></div>
          </div>
          <div class="form-item">
            <span class="form-item__name">密码</span>
            <div class="form-item__input"><input type="password" v-model="password" placeholder="请输入密码"></div>
          </div>
          <div class="form-item">
            <verification-code style="width: 17rem;margin: auto;" v-model="verification"></verification-code>
          </div>
          <div class="form-item form-item--center">
            <button class="form-item__button" type="button" @click="login">登陆</button>
            <button class="form-item__button" type="button" @click="reset">重置</button>
          </div>
          <y-form-item label="测试">
            <y-input v-model="testInput"></y-input>
          </y-form-item>
        </form>
      </div>
    </div>
  </div>
