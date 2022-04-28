<template>
    <h1>App.vue 根组件</h1>
    <hr />
    <button @click="flag = !flag">Toggle</button>
    <life-cycle v-if="flag"></life-cycle>
</template>

<script>
import LifeCycle from './LifeCycle.vue'

export default {
    name: 'MyApp',
    components: {
        LifeCycle
    },
    data() {
        return {
            flag: true,
        }
    },
}
</script>

<style>
</style>