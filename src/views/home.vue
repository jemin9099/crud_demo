<template>
   <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-10 shadow p-3 rounded">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="text-center">Crud List </h1>
                    <hr>
                    <filterView/>
                    <listData/>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script setup>
import filterView from '@/components/filter.vue';
import listData from '@/components/list.vue';
</script>

<style lang="scss" scoped>

</style>