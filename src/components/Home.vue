<template>
    <div>
       
        <div class="grid-container">
        <div v-for="(img,index) in imageArr" :key="index" class="grid-item">
             <img :src="img" width="200px" height="160px" v-on:click="nextPage"/>            
        </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations} from 'vuex'
export default {
    data(){
        return{
            image:null,
            url :[],
            imageArr : null
        }
    },
    computed:{
        ...mapGetters(['getCredencials'])
    },
    mounted(){
        fetch('https://api.cloud.altbalaji.com/media/series/275/seasons/292/episodes?limit=10&order=asc&domain=in')
        .then(Response => Response.json())
        .then((res)=>{
            let arr = res.episodes;
             this.filterImage(arr)
        })
    },
    methods:{
        ...mapMutations(['setCredencials']),
       filterImage(arr) {
             let resp=[]
           arr.forEach(element => {
            resp.push(this.getimage(element.images))
           });
         this.imageArr = resp 
       },
       getimage(img) {
           
        let imageList = []
         img.forEach(ele => {
               if(ele.type == "system") { 
               imageList.push(ele.format["thumbnail-ld"].source)        
               }
           })
           
           return imageList
       },
       nextPage(){
           this.$router.push('Player')
       }
    }
}
</script>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color:black;
  padding: 0px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-size: 10px;
  text-align: center;
}
</style>