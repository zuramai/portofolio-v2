<template>
    <div class='card shadow-lg mb-8 rounded-xl  bg-white '>
        <img :src="image" class='h-48 w-full rounded-t-lg object-cover ' :alt="`Image for ${title}`" v-if="image!==''">
        <div class="card-body py-3 px-5 ">
            <h3 class='text-xl text-gray-700 font-bold'>{{title}}</h3>
            <p class='mt-3 text-gray-600 text-sm'>{{description}}</p>
            <div class="technologies flex flex-wrap mt-3">
                <div class="badge bg-blue-200 text-blue-800 px-2 py-1 text-sm rounded-sm mr-2 mb-2" v-for="(technology,index) in technologies" :key="index">{{technology}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        image: String,
        title: String,
        description: String,
        github_url: String,
        technologies: Array
    },
}
</script>
<style scoped>
</style>