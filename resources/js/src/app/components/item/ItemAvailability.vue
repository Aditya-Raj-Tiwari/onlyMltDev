<template>
  <div class="single-item-info-card my-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="row mb-1">
          <div class="col-12 mb-2">
            <img class=""
                 src="https://cdn02.plentymarkets.com/6wg68w8zahno/frontend/assets/img/single-item-icons/truck.svg"
                 width="22" height="22">
          </div>

          <div class="col-12 mb-1">
            <div class="d-flex justify-content-between"
            >
              <span class="font-weight-bold">{{name}}</span>
            </div>
          </div>
          <div class="col-12 mb-1">
            <div class="d-flex justify-content-between">
              <span>Standard-Lieferung</span>
              <span class="font-weight-bold"> kostenlos</span>
            </div>
          </div>
        </div>
      </li>
      <li class="list-group-item mb-1">
        <img class="lazyload"
             src="https://cdn02.plentymarkets.com/6wg68w8zahno/frontend/assets/img/single-item-icons/package.svg"
             width="22" height="22">

        <span class="ml-2">Kostenloser Versand &</span> Rückversand
      </li>
      <li class="list-group-item mb-1">
        <img class="lazyload"
             src="https://cdn02.plentymarkets.com/6wg68w8zahno/frontend/assets/img/single-item-icons/backarrow.svg"
             width="22" height="22">
        <span class="ml-2">31 Tage Rückgaberecht</span></li>
      <li class="list-group-item mb-1">
        <img class="lazyload"
             src="https://cdn02.plentymarkets.com/6wg68w8zahno/frontend/assets/img/single-item-icons/feather.svg"
             width="22" height="22">
        <span class="ml-2">Direkt vom Hersteller</span></li>
    </ul>
  </div>
  <!--    <span v-if="availability"-->
  <!--        :class="classes"-->
  <!--        :style="paddingStyles">-->
  <!--        <span>-->
  <!--            {{ name }}-->
  <!--        </span>-->
  <!--    </span>-->
</template>

<script>
export default {
  props: {
    paddingClasses: String,
    paddingStyles: String
  },

  inject: {
    itemId: {
      default: null
    }
  },

  computed:
      {
        availability() {
          const currentVariation = this.$store.getters[`${this.itemId}/currentItemVariation`];
          return currentVariation && currentVariation.variation && currentVariation.variation.availability;
        },

        classes() {
          return [
            "availability",
            "badge",
            "availability-" + (this.availability && this.availability.id),
            this.paddingClasses
          ];
        },

        name() {
          return this.availability && this.availability.names && this.availability.names.name;
        }
      }
}
</script>
