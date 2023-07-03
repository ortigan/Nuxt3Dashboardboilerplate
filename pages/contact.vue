<template>
  <div class="w-full h-auto justify-center items-center">
    <form @submit.prevent="submitForm" class="mt-4 md:mt-16 bg- flex items-center justify-center w-full">
    <div class="grid h-auto w-full grid-flow-row md:grid-flow-col grid-cols-0 md:grid-cols-2 grid-rows-0 md:grid-rows-5 gap-1">
        <input v-model="data.name" type="text" id="name" class="w-full bg-gray-100 focus:bg-orange-100 px-8 py-4 text-gray-600 placeholder:text-gray-500 focus:border-0 focus:outline-none" placeholder="*Name" required />
        <input v-model="data.email" type="email" id="email" class="w-full bg-gray-100 focus:bg-orange-100 px-8 py-4 text-gray-600 placeholder:text-gray-500 focus:border-0 focus:outline-none" placeholder="*Email" required />
        <div class="w-full flex flex-row space-x-1">
          <input v-model="data.countrycode" type="text" id="countrycode" class="w-1/5 bg-gray-100 focus:bg-orange-100 px-8 py-4 text-gray-600 placeholder:text-gray-500 focus:border-0 focus:outline-none" placeholder="+91" required />
          <input v-model="data.number" type="number" id="number" class="w-full bg-gray-100 focus:bg-orange-100 px-8 py-4 text-gray-600 placeholder:text-gray-500 focus:border-0 focus:outline-none" placeholder="*Number" required />
        </div>
        <input v-model="data.text" type="text" id="text" class="h-full w-full bg-gray-100 focus:bg-orange-100 p-0 px-8 py-4 text-gray-600 placeholder:text-gray-500 focus:border-0 focus:outline-none" placeholder="Message or Note to Team Teora" required />
      <button type="submit" class="w-3/4 md:w-full h-auto mt-4">
      <div>
        <div class="flex h-16 w-full cursor-pointer flex-row bg-white text-orange-600 hover:bg-orange-50">
          <p class="flex h-full w-full items-center justify border border-orange-600 px-6 py-2 text-base md:text-xl">Submit</p>
          <div class="flex h-full items-center justify-center border border-l-0 border-orange-600 px-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </div>
    </button>
      <!-- <div class="row-span-6 hidden sm:block h-full w-full bg-orange-100 overflow-hidden">
        <div class="h-full w-full overflow-hidden"><img src="https://res.cloudinary.com/binarycode/image/upload/v1685711881/TeOra/Stock/soil_eqg68q.jpg" alt="" class="w-full h-full object-cover"></div>
      </div> -->
    </div>
  </form>
  <!-- Pagination -->
  <!-- <div class="mt-4 flex w-full flex-row justify-end">
          <div class="text-primaryDark flex h-10 w-36 flex-row items-center justify-between space-x-1">
            <div @click="pages.current_page != 1? backward() : null" :class="pages.current_page != 1? 'bg-primaryLight hover:bg-primary hover:text-white cursor-pointer' : 'bg-gray-200 cursor-not-allowed'" class="flex items-center justify-center rounded-md px-3 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div class="text-primaryDark border-primaryDark flex items-center justify-center rounded-md border bg-white px-5 py-2 text-sm">
              <p>{{pages.current_page}}</p>
            </div>
            <div @click="pages.last_page > pages.current_page? forward() : null" :class="pages.last_page > pages.current_page? 'bg-primaryLight hover:bg-primary hover:text-white cursor-pointer' : 'bg-gray-200 cursor-not-allowed'" class="flex items-center justify-center rounded-md px-3 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
  </div> -->
  </div>
</template>

<script lang="ts" setup>
import { useToast } from 'vue-toastification';
const toast = useToast();
// const pages = useFilesMeta();
// await getFiles();
// function forward() {
//   current_page.value++
//   getFiles(current_page.value)
// }
// function backward() {
//   current_page.value--
//   getFiles(current_page.value)
// }

import 'vue-toastification/dist/index.css';
const data = reactive({
  name: "",
  email: "",
  countrycode: "",
  number: "",
  text: "",
});

function clearform(){

data.name= "";
data.email= "";
data.number= "";
data.countrycode= "";
data.text= "";

}
 async function submitForm() {
    const response = await fetch("https://api.teoralife.com/api/public/form/general-inquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      },
      body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: data.text,
      contact:data.countrycode+data.number
      }),
    });
      const result = await response.json();
      console.log(result.message=="success" , "xsss")
      if (result.message=="success") {
        toast.success("Details Submitted", {timeout: 2000});
        clearform()
          // console.log("meow");
        }
        else{
          toast.error("Failed", {timeout: 2000});
        }
      }
</script>

<style>

</style>