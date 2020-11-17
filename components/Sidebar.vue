<template>
    <div :class="{'sidebar top-0 left-0 z-10 fixed':true, [`${theme}`]:true}">
        <div class="sidebar-toggler p-5 cursor-pointer transition duration-200" @click="toggleSidebar()">
            <font-awesome-icon :icon="['fas', 'bars']"  class='text-2xl'/>
        </div>
        <transition name="slide-fade-left">
            <ul class="sidebar-menu px-5 py-3" v-show="show">
                <li class='text-lg py-2'><a href="#top" @click.prevent="moveTo($event, 'hero')">Back to top</a></li>
                <li class='text-lg py-2'><a href="#about" @click.prevent="moveTo($event, 'about')">About Me</a></li>
                <li class='text-lg py-2'><a href="#projects" @click.prevent="moveTo($event, 'projects')">Projects</a></li>
                <li class='text-lg py-2'><a href="#skills" @click.prevent="moveTo($event, 'skills')">Skills</a></li>
                <li class='text-lg py-2'><a href="#experience" @click.prevent="moveTo($event, 'experience')">Experience</a></li>
                <li class='text-lg py-2'><a href="#contact" @click.prevent="moveTo($event, 'contact')">Contact</a></li>
            </ul>
        </transition>
    </div>
</template>
<script>
export default {
    mounted() {
		window.onscroll = e => {
            let offsetAbout = document.querySelector(`#about`).offsetTop
            let offsetProjects = document.querySelector(`#projects`).offsetTop
            let currentScroll = window.scrollY;

            if(currentScroll < offsetAbout) this.theme = 'light'
            if(currentScroll >= offsetAbout)  this.theme = 'dark' 
            if(currentScroll >= offsetProjects)  this.theme = 'light' 

        }
    },
    data: () => ({
        show: false,
        theme: 'light'
    }),
    methods: {
        toggleSidebar() {
            this.show = !this.show;
        }
    }
}
</script>
<style lang="scss">
.sidebar {
    &.dark {
        color: #222;
    }
    &.light {
        color: #eee;
    }
    .sidebar-toggler {
        &:hover {
            filter: drop-shadow(1px 2px 5px rgba(255,255,255,.3))
        }
    }
    .sidebar-menu  li a:hover {
        margin-left: .3rem;
    }
}
</style>