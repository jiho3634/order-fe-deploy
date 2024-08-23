<template>
    <h1>store test component</h1>
    <store-test-component-2 />
    <store-test-component-3 />
</template>

<script>
import StoreTestComponent2 from './StoreTestComponent2.vue';
import StoreTestComponent3 from './StoreTestComponent3.vue';
export default {
    data() {
        return {
        }
    },
    components: { StoreTestComponent2, StoreTestComponent3 },
    methods: {
        incrementCount() {
            this.count++;
        }
    }
}
</script>