<template>
  <transition name="modal-fade" style="z-index:999">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <div class="closebtn" @click="$emit('close-modal')">
            <div class="cross flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
        </div>
        <slot name="body"></slot>
      </div>
      <div class="close" @click="$emit('close-modal')">
        <!-- <img class="close-img" src="~/assets/close-icon.svg" alt="" /> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;  
  /* background-color: #000000;  */
  background: rgba(0,0,0,0.4);
  /* opacity: 0.5; */
}

.modal {
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 75%;
  position: relative;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}
.cross {
  height: 50px;
  width: 50px;
}
.closebtn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 12px;
  height: 70px;
  width: 70px;
  color: #7c3aed;
  /* margin: 10% 0 0 16px; */
  cursor: pointer;
}
.closebtn:hover {
  color: #5b21b6;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}


button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.12s ease;
}
</style>