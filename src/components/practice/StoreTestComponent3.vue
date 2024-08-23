<template>
    <div>
        <h1>store test component3</h1>
        <p>count : {{ getCount }} </p>
        <p>Message : {{ getMessage }} </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['getCount', 'getMessage']),
    }
}
</script>