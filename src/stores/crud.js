import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAddFormStore = defineStore('addForm', () => {
  let formData = ref({
    id: '',
    name: '',
    email: '',
    phone: '',
    role: ''
  })

  let search = ref('')
  let role = ref('')
  let crudDataList = ref([])
  let isEdit = ref(false)
  let perPageData = ref(5)
  let currentPage = ref(1)
  function submitForm() {
    if (isEdit.value) crudDataList.value[formData.value.id] = formData.value
    else crudDataList.value.push(formData.value)
    formData.value = {}
  }

  function editData(data, id) {
    isEdit.value = true
    Object.keys(data).forEach((e) => formData.value[e] = data[e])
    formData.value.id = id;
  }

  function deleteData(id) {
    crudDataList.value.splice(id, 1);
  }

  const filterData = computed(() => {
    return crudDataList.value.filter((item) => {
      const searchValue = search.value.toLowerCase();
      const roleName = role.value.toLowerCase();

      const matchesSearch = item.name.toLowerCase().includes(searchValue) || item.email.toLowerCase().includes(searchValue);
      const matchesRole = roleName === '' || item.role.toLowerCase() === roleName;

      return matchesSearch && matchesRole;
    })
  })
  function paginateData() {
    let start = (currentPage.value - 1) * perPageData.value
    let end = start + perPageData.value
    return filterData.value.slice(start, end)
  }
  let numPages = computed(() => {
    return Math.ceil(filterData.value.length / perPageData.value)
  })
  return { formData, search, submitForm, crudDataList, editData, deleteData, isEdit, role, filterData, paginateData, numPages, currentPage }
})
