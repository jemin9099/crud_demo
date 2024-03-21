<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Add Form</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form action="" @submit.prevent="store.submitForm()">
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <input type="hidden" name="id" v-model="formData.id">
                <label for="name" class="form-label">Name:</label>
                <input type="text" name="name" class="form-control" v-model="formData.name" id="name" required>

              </div>
              <div class="col-12">
                <label for="email" class="form-label">Email:</label>
                <input type="email" name="email" class="form-control" v-model="formData.email" id="email" required>

              </div>
              <div class="col-12">
                <label for="phone" class="form-label">Mobile No:</label>
                <input type="number" name="phone" class="form-control" v-model="formData.phone" id="phone" required>

              </div>
              <div class="col-12">
                <label for="role" class="form-label">Role :</label>
                <select name="" id="role" class="form-control" v-model="formData.role" required>
                  <option value="admin">admin</option>
                  <option value="user">user</option>
                  <option value="staff">staff</option>
                  <option value="student">student</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="">{{ store.isEdit ? 'update' : 'submit'
              }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAddFormStore } from '@/stores/crud'
let { formData, formErrors } = storeToRefs(useAddFormStore())
let store = useAddFormStore();
</script>

<style scoped></style>