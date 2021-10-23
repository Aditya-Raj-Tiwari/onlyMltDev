<!--suppress Stylelint -->
<template>
  <div class="single-overview">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button class="d-flex align-items-center justify-content-between btn btn-lg btn-block btn-link"
                  data-toggle="collapse" data-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
            Material & Qualität
          </button>
        </h2>
      </div>
      <div id="collapseOne" class="collapse show"
           aria-labelledby="headingOne">
        <div class="card-body">
          <dl v-for="subProperty in subPropsDescription">
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 345 && subProperty.values.value"
            >
              <div>
                Verarbeitung
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 345 && subProperty.values.value">
              <div class="d-flex">
                {{ subProperty.values.value }}
                <div v-if="subProperty.values.description" class="ml-2">
                  <a href="javascript:void(0)" class="child_desc_info">
                    <i aria-hidden="true" data-toggle="tooltip" data-placement="top" height="120"
                       :data-original-title="subProperty.values.description"
                       class="fa fa-info-circle"></i>
                  </a>
                </div>
              </div>
            </dd>
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 346 && subProperty.values.value">
              <div>
                Herkunft
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 346 && subProperty.values.value">
              <div>

                <div v-if="subProperty.values.value">
                  {{ subProperty.values.value }}
                </div>
              </div>
            </dd>
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 633 && subProperty.values.value">
              <div>
                Grundgewebe
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 633 && subProperty.values.value">
              <div>
                <div v-if="subProperty.values.value">
                  Grundgewebe
                </div>
              </div>
            </dd>
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 678 && subProperty.values.value">
              <div>
                Flormaterial
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 678 && subProperty.values.value">
              <div>
                <div v-if="subProperty.values.value">
                  {{subProperty.values.value }}
                </div>
                <div v-else>
                  <div v-for="eachvalue in subProperty.values">
                    {{ eachvalue.value }}
                  </div>
                </div>

              </div>
            </dd>
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 348 && subProperty.values.value">
              <div>
                Knoten/m&sup2;
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 348 && subProperty.values.value">
              <div class="d-flex">
                <div v-if="subProperty.values.value">
                  {{ subProperty.values.value }}
                </div>
                <div v-if="subProperty.names.description" class="ml-2">
                  <a href="javascript:void(0)" class="child_desc_info">
                    <i aria-hidden="true" data-toggle="tooltip" data-placement="top" height="120"
                       :data-original-title="subProperty.names.description"
                       class="fa fa-info-circle"></i>
                  </a>
                </div>
              </div>
            </dd>
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 349 && subProperty.values.value">
              <div>
                Alter
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 349 && subProperty.values.value">
              <div>

                <div v-if="subProperty.values.value">
                  {{subProperty.values.value}}
                </div>
              </div>
            </dd>
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 350 && subProperty.values.value">
              <div>
                Zustand
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 350 && subProperty.values.value">
              <div>
                <div v-if="subProperty.values.value">
                  {{subProperty.values.value}}
                </div>
              </div>
            </dd>
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 351 && subProperty.values.value">
              <div>
                Zustandshinweis
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 351 && subProperty.values.value">
              <div>
                <div v-if="subProperty.values.value">
                  {{subProperty.values.value}}
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h2 class="mb-0">
          <button class="d-flex align-items-center justify-content-between btn btn-lg btn-block btn-link"
                  data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
            Maße & Gewicht
          </button>
        </h2>
      </div>
      <div id="collapseTwo" class="collapse"
           aria-labelledby="headingOne">
        <div class="card-body">
          <dl v-for="subProperty in subPropsDescription">
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 657 && subProperty.values.value"
            >
              <div>
                L x B x H
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 657 && subProperty.values.value">
              <div class="d-flex">
                {{ subProperty.values.value }}
                <div v-if="subProperty.values.description" class="ml-2">
                  <a href="javascript:void(0)" class="child_desc_info">
                    <i aria-hidden="true" data-toggle="tooltip" data-placement="top" height="120"
                       :data-original-title="subProperty.values.description"
                       class="fa fa-info-circle"></i>
                  </a>
                </div>
              </div>
            </dd>
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 658 && subProperty.values.value">
              <div>
                Gewicht/kg
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 658 && subProperty.values.value">
              {{ subProperty.values.value }}
            </dd>
            <dt class="w-50 pull-left font-weight-bold"
                v-if="subProperty.id == 659 && subProperty.values.value">
              <div>
                Konfektion
              </div>
            </dt>
            <dd class="w-50 pull-left"
                v-if="subProperty.id == 659 && subProperty.values.value">
              <div class="d-flex">
                <div v-if="subProperty.values.value">
                  {{subProperty.values.value}}
                </div>
                <div v-if="subProperty.values.description" class="ml-2">
                  <a href="javascript:void(0)" class="child_desc_info">
                    <i aria-hidden="true" data-toggle="tooltip" data-placement="top" height="120"
                       :data-original-title="subProperty.values.description"
                       class="fa fa-info-circle"></i>
                  </a>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <h2 class="mb-0">
          <button class="d-flex align-items-center justify-content-between btn btn-lg btn-block btn-link collapsed"
                  data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="false" aria-controls="collapseThree">
            Mehr zu diesem Produkt
          </button>
        </h2>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThree">
        <div class="card-body">
          <div class="d-flex justify-content-start pl-3">
            <ul class="w-100 px-0"
            >
              <li v-for="subProperty in subPropsDescription" v-if="subProperty.values.value">
                <span v-if="subProperty.id == 660">
                  {{subProperty.values.value}}
                </span>
                <span v-if="subProperty.id == 661">
                  {{subProperty.values.value}}
                </span>
                <span v-if="subProperty.id == 662">
                  {{subProperty.values.value}}
                </span>
                <span v-if="subProperty.id == 663">
                  {{subProperty.values.value}}
                </span>
                <span v-if="subProperty.id == 664">
                  {{subProperty.values.value}}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingFour">
        <h2 class="mb-0">
          <button class="d-flex align-items-center justify-content-between btn btn-lg btn-block btn-link collapsed"
                  data-toggle="collapse" data-target="#collapseFour"
                  aria-expanded="false" aria-controls="collapseFour">
            Nachhaltigkeit
          </button>
        </h2>
      </div>
      <div id="collapseFour" class="collapse"
           aria-labelledby="headingFour">
        <div class="card-body">
          <a href="javascript:void(0)" class="img-desc">
            <img class="img-fluid nachhaltig" alt="nachhaltig"
                 src="https://cdn02.plentymarkets.com/6wg68w8zahno/frontend/Webshop-Neu/Startseiten_Banner/Soziales/Gute_Projekte.jpg"
            >
            <p>
              Nicht nur die Qualitätsstandards unseres Sortiments sind uns wichtig, sondern auch die
              Arbeitsbedingungen, unter denen unsere Produkte einzeln produziert werden. Mit jedem Kauf
              unterstützen Sie die sozialen Projekte von Care & Fair, Goodweave und Rugmark
            </p>
          </a>
        </div>
      </div>
      <!--      <p class="artikel_nummer">Art. Nr.: {{currentVariation.variation.id}} </p>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "detailed-prop",
  inject: {
    itemId: {
      default: null
    }
  },
  data() {
    return {
      variationData: this.$store.getters[`${this.itemId}/currentItemVariation`].variationProperties,

    }
  },
  computed:
      {
        variationDescription() {
          return this.variationData.filter(artikelMerkmale => artikelMerkmale.id == 30)
        },
        subPropsDescription() {
          let subProp = {}
          this.variationDescription.forEach(item => subProp = item.properties)
          return subProp
        }

      }
}
</script>


