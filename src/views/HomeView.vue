<script setup lang="ts">
import { onMounted, ref } from 'vue'
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'

interface IExperience {
  position: string
  description: string
  company: string
  company_url: string
  start_year: number | string
  end_year: number | string
  technologies: Array<{
    name: string
  }>
}
interface IProject {
  title: string
  type: string
  description: string
  image_path: string
  url: string
  technologies: Array<{
    name: string
  }>
}

const experiences = ref<IExperience[]>([])
const projects = ref<IProject[]>([])

onMounted(() => {
  fetch('/experience.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    })
    .then((data) => {
      experiences.value = data
    })
    .catch((error) => {
      console.log('Error fetching experiences: ', error)
    })

  fetch('/projects.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    })
    .then((data) => {
      projects.value = data
    })
    .catch((error) => {
      console.log('Error fetching experiences: ', error)
    })
})
</script>

<template>
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:flex lg:justify-between lg:gap-4">
      <header
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
      >
        <div>
          <img src="/profile2.jpg" alt="" class="h-52 mb-10 ml-28" />

          <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Vincent Cerezo
          </h1>
          <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Full Stack Web Developer
          </h2>
          <p class="mt-4 max-2-xs leading-normal">
            I specialize in creating dynamic and responsive web applications that bring innovative
            ideas to life.
          </p>
          <nav class="hidden lg:block">
            <ul class="mt-16 w-max">
              <li>
                <a href="#about" class="flex items-center py-3 active">About</a>
              </li>
              <li>
                <a href="#experience" class="flex items-center py-3 active">Experience</a>
              </li>
              <li>
                <a href="#projects" class="flex items-center py-3 active">Projects</a>
              </li>
            </ul>
          </nav>
        </div>
        <ul class="ml-1 mt-8 flex items-center">
          <li class="hover:cursor-pointer mr-5 text-xs shrink-0">
            <a href="https://github.com/xxcerezo29" target="_blank">
              <v-icon name="bi-github" animation="float" hover scale="2" />
            </a>
          </li>
          <li class="hover:cursor-pointer mr-5 text-xs shrink-0">
            <a href="https://www.linkedin.com/in/vincent-cerezo/" target="_blank">
              <v-icon name="bi-linkedin" animation="float" hover scale="2" />
            </a>
          </li>
          <li class="hover:cursor-pointer mr-5 text-xs shrink-0">
            <a href="https://www.instagram.com/hachiij_/" target="_blank">
              <v-icon name="fa-instagram" animation="float" hover scale="2" />
            </a>
          </li>
        </ul>
      </header>

      <main class="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience :experiences="experiences" />
        <Projects :projects="projects" />
      </main>
    </div>
  </div>
</template>
