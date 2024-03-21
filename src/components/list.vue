<template>
    <br>
    <table class="table table-striped table-hover table-bordered text-center">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody v-if="store.paginateData().length">
            <tr v-for="(item, index) in store.paginateData()" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.role }}</td>
                <td><button class="btn btn-primary me-1" @click="store.editData(item, index)" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">Edit</button> <button class="btn btn-danger"
                        @click="store.deleteData(index)">Delete</button></td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="5">No Data Found</td>
            </tr>
        </tbody>
    </table>
    <nav aria-label="Page navigation example" v-if="store.paginateData().length">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#"
                    @click="store.currentPage > 1 ? store.currentPage-- : null">Previous</a></li>
            <li class="page-item" :class="store.currentPage == i ? 'active' : ''"
                v-for="(i, index) in store.numPages == 0 ? 1 : store.numPages" :key="index"><a class="page-link" href="#"
                    @click="store.currentPage = i">{{ i }}</a></li>
            <li class="page-item"><a class="page-link" href="#"
                    @click="store.currentPage < store.numPages ? store.currentPage++ : null">Next</a></li>
        </ul>
    </nav>
</template>

<script setup>
import { useAddFormStore } from '@/stores/crud'
let store = useAddFormStore();

</script>

<style lang="scss" scoped></style>