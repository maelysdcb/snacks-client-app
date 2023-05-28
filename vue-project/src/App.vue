<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref,onMounted, onUnmounted } from 'vue';

    const isActive = ref(false);
    const route = useRoute();

    const setActive = () => {
      isActive.value = true;
    };

    const setInactive = () => {
      isActive.value = false;
    };

    // Hook exécuté lorsque le composant est monté
    onMounted(() => {
      setActive();
    });

    // Hook exécuté lorsque le composant est démonté
    onUnmounted(() => {
      setInactive();
    });

    // Vérifier si la route correspond à la route active
    const checkActiveRoute = (to) => {
      return route.path === to;
    };

    // Vérifier si la route active correspond à la route fournie
    const isActiveRoute = (to) => {
      return isActive.value && checkActiveRoute(to);
    };
</script>

<template>
  <div class="container">
    <header>
      <div class="header-wrap">
        <div class="logo">
          <img src="./assets/svg/logo-dotted.svg" alt="logo-dotted" style="width:125px;" />
        </div>
        <div class="profile">
          <img src="./assets/svg/person-circle-outline.svg" alt="profile-icon" style="width:30px; height:30px;">
        </div>
      </div>
    </header>
    <RouterView></RouterView>
    <!-- <RouterView :component="CartView" /> -->
  </div>
  <div class="spacer">
    &nbsp;
  </div>
  <nav>
    
    <RouterLink to="/" class="link" :class="{'active': isActiveRoute('/')}">
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
        <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      </svg>
    </RouterLink>
    <RouterLink to="/cart" class="link" :class="{'active': isActiveRoute('/cart')}">
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
      <circle cx="176" cy="416" r="16" fill="none" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <circle cx="400" cy="416" r="16" fill="none" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path fill="none" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"/>
      <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    </svg>
    </RouterLink>
    <RouterLink to="/profile" class="link" :class="{'active-fill': isActiveRoute('/profile')}">
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
      <path fill="#FAFAFA"
        d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
      <path fill="#FAFAFA"
        d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
    </svg>
    </RouterLink>
  </nav>
</template>

<style scoped>
@media screen and (max-width:426px) {

  .container {
    padding:2em;
  }
  .active path {
    stroke:#1AB76C;
  }
  .active circle {
    stroke: #1AB76C;
  }
  
  .active-fill path {
    fill:#1AB76C;
  }
  .header-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    border-radius: 15px 15px 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: var(--nav-card-color);
  }

  .spacer {
    height: 65px;
  }

  .link {
    width: 30px;
    height: 30px;
    text-decoration: none;
  }

}
</style>
