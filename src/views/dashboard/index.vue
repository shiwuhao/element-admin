<template>
  <div>
    <el-row :gutter="10">
      <el-col :sm="24" :md="12" :xl="6">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12" :xl="6">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12" :xl="6">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12" :xl="6">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-card>
      asas
    </el-card>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Theme from "@/components/SettingDrawer/ThemeColor/Theme";

  export default {
    name: 'Home',
    components: {
      HelloWorld, Theme
    }
  }
</script>
