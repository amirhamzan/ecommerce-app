<template>
  <div class="item-main-card">
    <div class="item-img">
        <img :src=props.itemDetail.thumbnail alt="thumbnail-image">
    </div>
    <div class="item-desc">
      <div class="row">
        <div class="col">
          {{ props.itemDetail.title }}
        </div>
        <div class="col text-end">${{ props.itemDetail.price }}</div>
      </div>
      <div>{{ props.itemDetail.discountPercentage }}% Off</div>
      <Button label="Add To Cart"/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["itemDetail"]);
console.log(props.itemDetail);
</script>

<style scoped>
.item-main-card {
  display: block;
  border: 1px solid black;
}
.item-img {
  /* height: 100px; */
  /* background-color: aqua; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-desc {
}
</style>
