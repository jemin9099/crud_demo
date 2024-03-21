<template>
  <div class="row align-items-end">
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-4">
          <label for="filter" class="form-label">Select Role :</label>
         
          <select name="" id="filter" v-model="store.role" class="form-control">
            <option value="admin">admin</option>
            <option value="user">user</option>
            <option value="staff">staff</option>
            <option value="student">student</option>
          </select>
        </div>
        <div class="col-md-8">
          <label for="search" class="form-label">Search:</label>
          <input type="search" v-model="store.search" name="search" class="form-control" id="search">
        </div>
      </div>
    </div>
    <div class="col-md-4 text-end">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> + Add</button>
    </div>
  </div>
  <Teleport to="body">
    <addForm />
  </Teleport>
</template>

<script setup>
import addForm from './add.vue';
import { useAddFormStore } from '@/stores/crud'
let store = useAddFormStore();
</script>

<style lang="scss" scoped></style>