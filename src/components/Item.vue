<template>
    <div> 
        <li>{{content}}</li>
        <button>确认收货</button>
        
        
    </div>
</template>
<script>
export default {
   name: "Item",
  props: ['content', 'index']
  
}
</script>
<style>

</style>


