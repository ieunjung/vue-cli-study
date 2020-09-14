<template>
    <div>
        <p>{{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'initial name',
        }
    },
    methods: {
        updateName(){
            this.name = 'changed name';
        }
    }
}
</script>

<style scoped>
h1 {
    color: blueviolet;
}
</style>