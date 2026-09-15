<template>
  <div class="demo">
    <h2>Gemini Demo</h2>
    <button @click="fetchAnswer" :disabled="loading">
      {{ loading ? 'Loading…' : 'Get Fixed Reply' }}
    </button>
    <pre v-if="answer">{{ answer }}</pre>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { askGemini } from '../api/gemini.js';

const loading = ref(false);
const answer = ref('');
const error = ref('');
const staticPrompt = 'Reply with exactly: "مرحباً! أنا النموذج الخاص بك."';

async function fetchAnswer() {
  loading.value = true;
  answer.value = '';
  error.value = '';
  try {
    answer.value = await askGemini(staticPrompt);
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.demo { padding: 1.5rem; background: #f9fafb; border-radius: 12px; }
button { background: #3369ff; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; cursor: pointer; }
button:hover { background: #5588ff; }
.error { color: #d00; margin-top: .5rem; }
</style>
