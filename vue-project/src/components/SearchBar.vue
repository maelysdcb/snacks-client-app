<script>
import {ref} from 'vue';

export default {
    setup(){
        
    }
};
</script>

<template>
 <div class="searchbar">
        <input class="search" type="text" placeholder="Search" />
        <span class="search-icon">
            <img src="../assets/svg/search-outline.svg" alt="search-icon" />
        </span>
    </div>
</template>

<style scoped>
input {
    position: relative;
    color: var(--font-color);
    padding-left:1.5em;
    width: 100%;
    height: 50px;
    background-color: var(--searchbar-color);
    outline: none;
    border: none;
    border-radius: 0.5em;
}

span {
    cursor: pointer;
    position: absolute;
    padding: .5em;
    background-color: var(--background-color);
    width: 40px;
    height: 40px;
    border-radius: 5px;
    top: 12%;
    right: 9.5%;
}
</style>