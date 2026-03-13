**Vanilla Js**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Js app</title>
</head>
<body>
    <h1></h1>
    
    <script>
        var name = "Vanilla JavaScript App";
        document.querySelector('h1').textContent = name;
    </script>
</body>
</html>
```

**Vue Js**
```vue
<template>
    <h1>{{ name }}</h1>
</template>

<script setup>
import { ref } from 'vue'

const name = ref("Vue.js Application")
</script>
```

**React Js**
```ts
import { useState } from 'react'

function App() {
  const [name, setName] = useState('React.js Application')

  return (
        <h1>{name}</h1>
    )
}

export default App
```
