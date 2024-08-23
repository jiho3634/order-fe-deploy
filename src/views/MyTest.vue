<template>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Age', value: 'age' },
          { text: 'Country', value: 'country' }
        ],
        items: [
          { name: 'John', age: 30, country: 'USA' },
          { name: 'Jane', age: 25, country: 'Canada' },
          { name: 'Paul', age: 28, country: 'UK' },
          // 더 많은 데이터...
        ]
      }
    }
  }
  </script>
  