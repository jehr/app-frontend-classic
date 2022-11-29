<template>
  <v-container>
    <v-form v-model="valid" @submit.prevent="sendForm()">
      <v-container>
        <v-row dense>
          <!-- Front Document -->
          <v-col class="d-flex justify-center">
            <h2 style="text-align:center">
              {{ title }}
            </h2>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <img
              :src="imgFront"
              :width="$vuetify.breakpoint.width < 600 ? 125 : 250"
              alt="front"
            >
          </v-col>
          <v-col cols="12">
            <h3>Subir documento por el lado frontal</h3>
            <v-file-input
              v-model="sideA"
              color="deep-purple accent-4"
              counter
              accept="image/*"
              label="subir cedula lado delantero"
              placeholder="Select your files"
              prepend-icon="mdi-camera"
              outlined
              :rules="rules"
              small
              dense
              :show-size="1000"
            >
              <template #selection="{ index, text }">
                <v-chip
                  v-if="index < 2"
                  color="deep-purple accent-4"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="text-overline grey--text text--darken-3 mx-2"
                >
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
            <h3>
              Subir documento por el lado trasero
            </h3>
            <v-file-input
              v-model="sideB"
              color="deep-purple accent-4"
              counter
              accept="image/*"
              label="subir cedula lado trasero"
              placeholder="Select your files"
              prepend-icon="mdi-camera"
              outlined
              dense
              :rules="rules"
              small
              :show-size="1000"
            >
              <template #selection="{ index, text }">
                <v-chip
                  v-if="index < 2"
                  color="deep-purple accent-4"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="text-overline grey--text text--darken-3 mx-2"
                >
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
          </v-col>
          <!-- Botones -->
          <v-col cols="12" class="mt-4">
            <v-card-actions>
              <v-spacer />
              <v-btn
                text
                small
                @click="showOptionModal('isFormUploadDocument')"
              >
                Cancelar
              </v-btn>
              <v-btn
                :disabled="!valid || isPosting"
                :loading="isPosting"
                color="five"
                type="submit"
                :dark="valid"
                rounded
                class="purple darken-4"
                small
              >
                Subir
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import { propertiesGenerator, showOptionModal } from '~/plugins/helpers'
import { VModelAspirantFile } from '~/interfaces/components/pages/aspirantfile.interface'
import imgFront from '~/static/undraw/citation/addDocument.svg'
import { AspirantController } from '~/controllers/aspirant.controller'

export default {
  data: () => ({
    valid: true,
    imgFront,
    sideA: [],
    sideB: [],
    title: 'Aquí puedes cargar el documento de identificación',
    rules: [
      v => !!v || 'File is required',
      v => (v && v.size > 0) || 'File is required'
    ]
  }),
  computed: {
    ...mapState('app', ['isPosting']),
    ...mapState('aspirantfile', ['editedAspirantFile']),
    ...propertiesGenerator([...VModelAspirantFile], {
      path: 'aspirantfile',
      mut: 'aspirantfile/setProperty'
    })
  },
  methods: {
    showOptionModal,
    uploadDocument: AspirantController.post.uploadIdentificationDocument,
    sendForm () {
      const files = {
        sideA: this.sideA,
        sideB: this.sideB
      }
      this.uploadDocument(files)
    }
  }
}
</script>
