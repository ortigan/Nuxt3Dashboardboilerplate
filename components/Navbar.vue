<template>
  <div class="navBg w-full h-20">
    <div class="w-full h-full bg-transparent flex flex-row text-violet-700 text-4xl items-center">
      <div class="px-24 w-full flex flex-row items-center justify-between py-6">
        <div class="flex flex-row w-full bg- space-x-6 items-center">
          <NuxtLink to="/" class="cursor-pointer flex items-center"><p>xyz</p></NuxtLink>
          <div class="text-xl"><time :datetime="date.utc()"> {{ date }}</time></div>
        </div>
        <div class="flex flex-row w-full justify-end space-x-8 items-center text-xl">
          <span v-for="(item, index) in menuitems" :key="index">
            <NuxtLink :to="item.path" class="relative cursor-pointer">
              <p>{{item.name}}</p>
              <div v-if="'/'+ route.name == item.path" class="absolute -bottom-1 flex w-full justify-center">
                <p class="bg-violet-600 h-1 w-4 rounded-full"></p>
              </div>
              <div v-else class=""></div>
            </NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.navBg {
  backdrop-filter: saturate(180%) blur(12px);
  background-color: #F1EAFF;
}
#mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #F1EAFF;
    opacity: 0.9;
}
</style>

<script lang="ts" setup>
import Modal from '../utils/Modal.vue';
const route = useRoute()
const isOpen= ref(false)
console.log(route.name)

const dayjs = useDayjs()
const date = dayjs('2023-07-05')

// const activeTab= ref(0)
// const router = useRouter()

// function home(){
//   if (activeTab.value!=0) {
//         //for de-assigning
//         isOpen.value = false;
//         activeTab.value = 0;
//   }
//   router.push({path:'/'})
// }
// function toggleTab(id:number){
//   console.log(route, "route")
//     if (isOpen.value === false) {
//           activeTab.value = id;
//         //for assigning current id
//         isOpen.value = true;
         
//       } else if(isOpen.value === true) {
//           activeTab.value = id;
//       }
// }
const menuitems : {
    id: number;
    path: string; 
    name: string; 
  }[]=[
    {
      id: 4,
      path: `/about`,
      name: `About us`,
    },
    {
      id: 3,
      path: `/contact`,
      name: `Contact`,
    },
  ]
</script>