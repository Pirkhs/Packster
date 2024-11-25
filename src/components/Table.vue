<script setup>

const props = defineProps({
    headers: Array,
    data: Array,
})

</script>

<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th> Stat </th>
                    <th> Value </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                v-for="header, i in headers"
                class="table-row"> 
                    <td> {{ header }} </td>
                    <td> {{ data[i] }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;
}

tr:nth-child(even) {
background-color: #D6EEEE;
}

tr:hover {opacity: 0.5;}

th {
    background-color: #ddd;
}

th, td {
  padding-top: 1%;
  padding-bottom: 2%;
  padding-left: 3%;
  padding-right: 4%;
}
</style>