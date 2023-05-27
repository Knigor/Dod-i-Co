<template>
  <div>
    <select v-model="selectedOption" @change="handleChange">
      <option value="">Выберите роль</option>
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: "",
      options: ["Название роли", "Название роли", "Название роли","Название роли"],
    };
  },
  methods: {
    handleChange() {
      // Обработка изменения значения в выпадающем списке
      console.log(this.selectedOption);
    },
  },
};
</script>

<style>
select {
  border: none;
  outline: none;
  background: #e7e7e7;
  border-radius: 8px;
  max-width: 328px;
  height: 44px;
  padding-left: 12px;
}
</style>
