<script setup>
import { provideForm } from './form/formContext.js'
import CampoNombre from './form/CampoNombre.vue'
import CampoCorreo from './form/CampoCorreo.vue'
import CampoTelefono from './form/CampoTelefono.vue'
import CampoFecha from './form/CampoFecha.vue'
import CampoPersonas from './form/CampoPersonas.vue'
import CampoMesa from './form/CampoMesa.vue'
import CampoComentarios from './form/CampoComentarios.vue'
import Button from './form/Button.vue'

const form = provideForm((datos) => console.log('Reserva:', datos))
</script>

<template>
  <section class="reservation" id="reservar">
    <div class="container">
      <h2 class="section-title">Reserva tu mesa</h2>
      <p class="section-subtitle">Completa el formulario y te esperamos</p>

      <form class="form-card" @submit.prevent="form.submit" novalidate>
        <div v-if="form.state.enviado" class="form-success">
          ¡Reservación enviada con éxito! Te contactaremos pronto.
        </div>

        <div class="form-row">
          <CampoNombre />
          <CampoCorreo />
        </div>

        <div class="form-row">
          <CampoTelefono />
          <CampoFecha />
        </div>

        <div class="form-row">
          <CampoPersonas />
          <CampoMesa />
        </div>

        <CampoComentarios />

        <Button type="submit" :block="true">Confirmar reservación</Button>
      </form>
    </div>
  </section>
</template>
