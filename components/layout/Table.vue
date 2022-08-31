<template>
  <v-data-table
    :class="[
      `${primaryColor}`,
      customClass ? customClass : '',
      'text-uppercase'
    ]"
    :items="items"
    :headers="headers"
    :dark="dark"
    :no-data-text="noDataText"
    :no-results-text="noResultText"
    :footer-props="footerProps"
    item-key="id"
    :dense="dense"
    :search="search"
    :show-expand="showExpand"
  >
    <template #top>
      <slot name="header" :items="items" />
    </template>
    <!-- Item Selected -->
    <template #[`item.selected`]="{ item }">
      <slot name="selected" :category="item" />
    </template>
    <!-- typification -->
    <template #[`item.tipificacion.name`]="{ item }">
      <slot name="typification" :category="item" />
    </template>
    <!-- status -->
    <template #[`item.typification`]="{ item }">
      <slot name="typification" :category="item" />
    </template>
    <!-- LectorCC -->
    <template #[`item.lectorCC`]="{ item }">
      <slot name="lectorCC" :category="item" />
    </template>

    <!-- actions -->
    <template #[`item.status`]="{ item }">
      <slot name="status" :category="item" />
    </template>

    <template #[`item.createdAt`]="{ item }">
      {{ $moment(item.createdAt).format('MMMM Do YYYY, h:mm') }}
    </template>
    <template #[`item.rdate`]="{ item }">
      {{ $moment(item.rdate).format('MMMM Do YYYY') }}
    </template>

    <template #[`item.active`]="{ item }">
      <slot name="status" :skill="item" />
    </template>
    <template #[`item.actions`]="{ item }">
      <slot name="actions" :category="item" />
    </template>

    <template #expanded-item="{ headers: rowHeaders , item }">
      <td class="pa-5" :colspan="rowHeaders.length">
        <div class="d-flex flex-column">
          <div>
            <small>Observación del Agente</small>
            <br>
            {{ item.entryObservation }}
          </div>
          <div class="mt-10">
            <small>Script Automatico</small>
            <br>
            {{ item.entryObservation2 }}
          </div>
        </div>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      default: ''
    },
    primaryColor: {
      type: String,
      default: ''
    },
    secondaryColor: {
      type: String,
      default: ''
    },
    noDataText: {
      type: String,
      default: ''
    },
    noResultText: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    },
    footerProps: {
      type: Object,
      required: false,
      default: () => ({
        disableItemsPerPage: false,
        itemsPerPageText: 'Filas por página',
        itemsPerPageAllText: 'Todos'
      })
    },
    showExpand: Boolean,
    dense: Boolean,
    dark: Boolean
  }
}
</script>

<style lang="scss">
.custom-table {
  table {
    td {
      font-size: 0.6rem !important;
    }
  }
}
</style>
