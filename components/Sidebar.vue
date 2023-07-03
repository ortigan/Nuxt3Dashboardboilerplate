<template>
<div class="h-screen w-full">
  <div class="border-r-1 flex h-full w-64 flex-col justify-between border border-b-0 border-l-0 border-t-0 border-violet-600 text-violet-600">
    <div class="flex h-20 w-full items-center justify-center border border-violet-600  border-t-0 border-l-0 border-r-0 border-b-1 bg-violet-100 py-6">
      <svg @click="hamborgir()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 cursor-pointer hover:text-violet-800">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
    <!-- <div class="flex w-full flex-col">
        <div class="h-12 w-full bg-violet-100 border-violet-600 hover:bg-violet-200 cursor-pointer border border-l-0 border-r-0 border-t-1 border-b-1"></div>
        <div class="h-12 w-full bg-violet-100 border-violet-600 hover:bg-violet-200 cursor-pointer border border-l-0 border-r-0 border-t-0 border-b-1"></div>
    </div> -->
    <div class="flex flex-col w-full justify-center items-center text-xl">
        <span v-for="(item, index) in menuitems" :key="index" class="w-full bg-b">
            <NuxtLink :to="item.path" class="w-full cursor-pointer">
            <div class="relative h-12 w-full bg-violet-100 border-violet-600 hover:bg-violet-200 cursor-pointer border border-l-0 border-r-0 border-t-0 border-b-1 flex justify-center items-center">
                  <p>{{item.name}}</p>
                  <div v-if="'/'+ route.name == item.path" class="absolute -right-24 bottom-5 flex w-full items-center justify-center">
                    <p class="bg-violet-600 h-2 w-2 rounded-full"></p>
                  </div>
                  <div v-else class=""></div>
                </div>
            </NuxtLink>
            </span>
        </div>
    <!--  -->
    <!-- <NewModal v-show="showModal" @close-modal="showModal = false">
      <template v-slot:body>
        <H/>
      </template>
    </NewModal> -->
    <!--  -->
    <div class="flex h-full w-full flex-col items-center justify-end space-y-6 py- text-violet-600">
      <a href=" https://api.whatsapp.com/send?phone=+6583572479&text=We%20would%20like%20to%20know%20more%20about%20Teora%20and%20get%20in%20touch!">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 cursor-pointer hover:text-violet-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
        </svg>
      </a>
      <a id="last" href="mailto:contact@teora.life">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 cursor-pointer hover:text-violet-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </a>
      <a @click="scrollToTop" id="myBtn" title="Go to top">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 cursor-pointer hover:text-violet-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>
      </a>
      <div class="h-28 w-full bg-violet-600 text-violet-100 flex flex-col justify-center items-center">
        <div><p>Designed & developed by</p></div>
        <div><p class="font-medium">Ortigan</p></div>
      </div>
    </div>
  </div>
</div>
</template>
  
<style>

</style>
<script lang="ts" setup>
import Modal from '~/utils/Modal.vue';
scrollToTop: true
const showModal = ref(false);
const showButton = ref(false);
function hamborgir(){
    console.log(showModal.value); 
    // showModal.value = true;
}
function scrollToTop() {
  var sb = document.getElementById('scrollbar');
  sb?.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  // console.log("aala")
}
const route = useRoute()
const isOpen= ref(false)
console.log(route.name)
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
    // {
    //   id: 6,
    //   path: `/research`,
    //   name: `Research`,
    // },
    // {
    //   id: 5,
    //   path: `/services`,
    //   name: `Offerings`,
    // },
    // {
    //   id: 1,
    //   path: `/resources`,
    //   name: `Resources`
    // },
    {
      id: 3,
      path: `/contact`,
      name: `Contact`,
    },
  ]
//  function handleScroll() {
//       if (window.scrollY > 100) {
//         showButton.value = true;
//       } else {
//         showButton.value = false;
//       }
//   }
// function copyTextNoInput() {
//       const storage = document.createElement('textarea');
//       // storage.value = this.$refs.message.innerHTML;
//       let myContainer=  <HTMLElement>document.getElementById('last');
//       myContainer .innerHTML = "";
//       this.$refs.reference.appendChild(storage);
//       storage.select();
//       storage.setSelectionRange(0, 99999);
//       document.execCommand('copy');
//       this.$refs.reference.removeChild(storage);
// }

</script>