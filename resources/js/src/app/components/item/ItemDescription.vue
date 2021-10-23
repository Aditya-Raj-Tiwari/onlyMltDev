<template>
  <div class="single my-5">
    <div class="bg-1 py-5">
      <div class="container-max elem to-fade-in">
        <div class="row">
          <div class="col-12 col-md-12 text-center">
            					<span class="h4 d-block mb-5 font-weight-bold">
                         Beschreibung
                      </span>
            <span v-html="shortDescription"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-description",
  inject: {
    itemId: {
      default: null
    }
  },

  computed:
      {
        shortDescription() {
          const currentVariation = this.$store.getters[`${this.itemId}/currentItemVariation`];
          return currentVariation.texts.shortDescription;
        }
      }
}
</script>

