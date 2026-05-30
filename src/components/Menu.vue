<script setup>
import MenuCard from './MenuCard.vue'
import { menuItems } from '../data/menu'
</script>

<template>
  <section class="menu" id="menu">
    <div class="container">
      <h2 class="section-title">Nuestro Menú</h2>
      <p class="section-subtitle">Selección de nuestros favoritos</p>

      <div class="menu-grid">
        <MenuCard v-for="item in menuItems" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>
