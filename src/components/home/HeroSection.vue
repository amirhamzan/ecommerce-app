<template>
  <div class="main-bg border-radius">
    <div class="content-hero row">
      <div class="col-lg-8 col-md-12 align-self-center">
        <div class="mb-5 mb-md-0">
          <h1 class="a-primary-color">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h1>
          <Button label="Buy Now" />
        </div>
      </div>
      <div class="col-lg-4 col-md-12 text-center">
        <!-- <img
          src="@/assets/undraw/phone.svg"
          alt="undraw-phone"
          class="hero-icon"
        /> -->
        <img
          src="@/assets/image/image-1.jpg"
          alt="undraw-phone"
          class="hero-icon"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-bg {
  background-color: #fbf0e4;
}

.content-hero {
  padding: 5rem;
}

.hero-icon {
  height: 12rem;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .content-hero {
    padding: 2rem;
  }

  .hero-icon {
    height: 8rem;
  }
}
</style>
