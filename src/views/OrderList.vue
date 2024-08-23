<template>
    <div>
        <OrderListComponent 
        :isAdmin="true"
        />
    </div>
</template>

<script>
import OrderListComponent from '@/components/OrderListComponent.vue';

export default {
    components: {
        OrderListComponent
    }
}
</script>