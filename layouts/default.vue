<template>
<div class="font-primary fixed flex h-screen w-full flex-row bg-white">
  <div class="hidden sm:block"><Sidebar /></div>
  <div class="flex w-full flex-col">
    <div class="hidden w-full md:block"><Navbar /></div>
    <!-- Mobile hamburger -->
    <!-- <div class="relative block w-full object-cover md:hidden" style="z-index:999">
      <div class="navBg h-20 w-full example">
        <div class="flex h-full w-full flex-row items-center bg-transparent text-4xl text-violet-700">
          <div class="flex w-full flex-row items-center justify-between px-12 py-6 md:px-24">
            <div @click="home" class="cursor-pointer"><p>TeOra.</p></div>
            <div class="flex items-end justify-end border-0 bg-violet-100 py-6">
              <svg @click="navbarstatus = true;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 cursor-pointer hover:text-violet-800">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- end -->
    <div id="scrollbar" class="relative h-full w-full overflow-auto">
      <slot />
      <!-- <div class="absolute h-20 w-20 bg-black bottom-20 right-10"></div> -->
      <div style="z-index: 9999;" class="w-full block lg:hidden fixed">
        <div @click="scrollToSection()" v-if="scrollPx > 200" class="absolute h-12 bg-opacity-75 rounded-sm w-10 bottom-24 right-8 bg-violet-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-violet-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
          </svg>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- <NewModal v-show="navbarstatus" @close-newmodal="navbarstatus = false" >    
      <template v-slot:body>
        <MobileHamburger />
      </template>
    </NewModal> -->
  </div>
  <!-- <Script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "hsfku024mr");
</Script> -->
</div>
</template>  

<style>
#mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #F1EAFF;
    opacity: 0.9;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
      display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .example {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
<script lang="ts" setup>
import Vue from 'vue'
// import NewModal from '~/utils/NewModal.vue';
const activeTab= ref(0)
const scrollPx = ref(0)
const router = useRouter()
const isOpen= ref(false)
// const navbarstatus = useNavbar()

onMounted(()=>{
  var sb = document.getElementById('scrollbar');
  sb?.addEventListener("scroll", (e) => {
      scrollPx.value = sb?.scrollTop??0;
  });
})

function scrollToSection(){
  var sb = document.getElementById('scrollbar');
  sb?.scrollTo({
    top: 0,
    behavior: 'smooth'

  })
}

function home(){
  if (activeTab.value!=0) {
        //for de-assigning
        isOpen.value = false;
        activeTab.value = 0;
  }
  router.push({path:'/'})
}
</script>