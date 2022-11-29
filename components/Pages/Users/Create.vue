<template>
  <v-form v-model="valid" @submit.prevent="sendForm()">
    <v-container>
      <v-row dense class="mt-4">
        <!-- Nombre completo -->
        <v-col cols="12" sm="12" xs="12">
          <v-text-field
            v-model="userItemFullName"
            :rules="rules.userItemFullName"
            prepend-inner-icon="mdi-form-textbox"
            label="Nombre completo"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Documento -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="userItemDocument"
            :rules="rules.userItemDocument"
            prepend-inner-icon="mdi-form-textbox"
            label="Documento"
            color="five"
            :counter="10"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Email -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="userItemEmail"
            :rules="rules.userItemEmail"
            prepend-inner-icon="mdi-form-textbox"
            label="Correo Electronico"
            color="five"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Teléfono -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="userItemPhone1"
            :rules="rules.userItemPhone1"
            prepend-inner-icon="mdi-form-textbox"
            label="Teléfono"
            color="five"
            :counter="10"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Teléfono2 -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="userItemPhone2"
            :rules="rules.userItemPhone2"
            prepend-inner-icon="mdi-form-textbox"
            label="Teléfono 2"
            color="five"
            :counter="10"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Usuario -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="userItemLogin"
            :rules="rules.userItemLogin"
            prepend-inner-icon="mdi-form-textbox"
            label="Usuario"
            color="five"
            :counter="10"
            outlined
            rounded
            dense
          />
        </v-col>
        <!-- Contraseña -->
        <v-col cols="12" md="6" lg="6" sm="12" xs="12">
          <v-text-field
            v-model="userItemPassWord"
            :rules="rules.userItemPassWord"
            prepend-inner-icon="mdi-form-textbox"
            label="Contraseña"
            color="five"
            :counter="10"
            type="password"
            outlined
            rounded
            dense
          />
        </v-col>
       
        <!-- Botones -->
        <v-col cols="12" class="mt-4">
          <v-card-actions>
            <v-spacer />
            <v-btn text small @click="showOptionModal('isFormUser')">
              Cancelar
            </v-btn>
            <v-btn
              :disabled="!valid || isPosting"
              :loading="isPosting"
              color="five"
              type="submit"
              :dark="valid"
              rounded
              small
            >
              {{ citationItemId ? 'Actualizar' : 'Guardar' }}
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { mapState } from 'vuex'
import {
  propertiesGenerator,
  showOptionModal,
  validateExpresion
} from '~/plugins/helpers'
import { VModelUser } from '~/interfaces/components/pages/user.interface'
import { onlyNumber, onlyString } from '~/plugins/regex'
import { UserController } from '~/controllers/user.controller'

export default {
  data: () => ({
    UserController,
    valid: true,
    rules: {
      userItemFullName: [v => !!v || 'El nombre completo es requerido'],
      userItemDocument: [v => !!v || 'El documento es requerido'],
      userItemPhone1: [v => !!v || 'El teléfono es requerido'],
      userItemEmail: [v => !!v || 'El correo electronico es requerido'],
      userItemLogin: [v => !!v || 'El usuario es requerido'],
      userItemPassWord: [v => !!v || 'La contraseña es requerida'],
    },
  }),

  computed: {
    ...mapState('app', ['isPosting']),
    ...mapState('user', ['editedUser']),
    ...propertiesGenerator([...VModelUser], {
      path: 'user',
      mut: 'user/setProperty'
    }),
    
  },

  watch: {
    // Documento
    userItemDocument (val) {
      this.$nextTick(() => {
        this.userItemDocument = validateExpresion(onlyNumber, val)
      })
    },
    // Nombres
    userItemFullName (val) {
      this.$nextTick(() => {
        this.userItemFullName = validateExpresion(onlyString, val)
      })
    }
  },

  async created () {
    await this.initialize()
  },

  methods: {
    showOptionModal,
    validateExpresion,
    allowedStep: m => m % 5 === 0,
    CreateUser: UserController.post.create,
    UpdateUserById: UserController.put.byId,

    async initialize () {
    },

    sendForm () {
      const inputData = { ...this.citationItem }
      if (inputData.id) {
        this.UpdateUserById(inputData.id, inputData)
      } else {
        this.CreateUser(inputData)
      }
    }
  }
}
</script>
