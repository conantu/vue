<template>
  <div>
    <loading v-if="bLoading"></loading>
    <app-footer v-if="bFoot"></app-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import AppFooter from './common/AppFooter.vue' 
import * as types from './store/types.js'
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {

    }
  },
  components:{
    AppFooter
  },
  watch:{
    $route:{
      handler(to){
        let path = to.path
        // console.log(path)
        this.checkPath(path)
      }
    }
  },
  methods:{
    checkPath(path){
      if(/cart|detail/.test(path)){
        this.$store.dispatch(types.VIEW_FOOT,false)
      }else{
        this.$store.dispatch(types.VIEW_FOOT,true)
      }
    }
  },
  computed:mapGetters(['bFoot','bLoading'])
}
</script>

<style>

</style>
