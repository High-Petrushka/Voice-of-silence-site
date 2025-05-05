<script setup></script>

<template>
  <div class="cont">
    <div class="location__cont">
      <div class="location__title">
        <div class="title__box">
          <h3 class="title">How to find us</h3>
        </div>
        <div class="location">
          <p>Saint-Petersburg, Ligovskiy Ave., 50</p>
        </div>
      </div>
      <div class="location__image">
        <img src="../../assets/location-slider/outdoor.jpg" alt="Shop image" />
      </div>
      <div class="location__text">
        <div class="schedule__box">
          <h6 class="text__title">Schedule</h6>
          <div class="text__cont">
            <p class="location__text">
              Without weekends<br />From 10am to 10pm
            </p>
          </div>
        </div>
        <div class="subway__box">
          <h6 class="text__title">Subway</h6>
          <div class="text__cont">
            <p class="location__text">Ligovskiy Ave.</p>
          </div>
        </div>
        <div class="contacts__box">
          <h6 class="text__title">Contacts</h6>
          <div class="text__cont">
            <p class="location__text">+7 (800) 789-08-56</p>
          </div>
        </div>
        <div class="socials__box">
          <h6 class="text__title">Socials</h6>
          <div class="icons__cont">
            <img src="../../assets/icons/youtube.png" alt="Social image" />
            <img src="../../assets/icons/instagram.png" alt="Social image" />
            <img src="../../assets/icons/telegram.png" alt="Social image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.location__cont {
  width: 100%;
  height: fit-content;

  background: var(--element-color);
  color: var(--reversed-font);

  padding: clamp(5rem, 3.844rem + 3.082vw, 7rem)
    clamp(1.6rem, 0.213rem + 3.698vw, 4rem);
  border-radius: 2.5rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  column-gap: 2rem;
  row-gap: 2rem;
}

.location__title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

  margin-bottom: 1rem;
}

.title {
  font-size: clamp(3.2rem, 3.006rem + 0.518vw, 4rem);
  font-weight: 400;
}

.location {
  width: fit-content;
  height: fit-content;

  padding: 0.8rem 2.1rem;
  background: var(--background-color);
  border-radius: 10rem;
}

.location p {
  font-size: clamp(1.2rem, 0.969rem + 0.616vw, 1.6rem);
  font-weight: 600;
  color: var(--font-color);
}

.location__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 1rem;
}

.location__text {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: auto auto;
  row-gap: 5px;
}

.icons__cont {
  display: flex;
  gap: 0.5rem;
}

.icons__cont img {
  width: clamp(2.8rem, 2.453rem + 0.924vw, 3.4rem);
  height: auto;
}

.text__title {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.location__text {
  font-size: clamp(1.4rem, 1.284rem + 0.308vw, 1.6rem);
  font-weight: 400;
}

@media screen and (width > 1024px) {
  .location__cont {
    padding: 7rem 4rem;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    row-gap: 4rem;
  }

  .location__title {
    margin-bottom: 0;
  }

  .title {
    font-size: 4.8rem;
  }

  .location p {
    font-size: 1.6rem;
  }

  .location__image {
    grid-area: 1 / 2 / 3 / 3;
  }

  .location__image img {
    border-radius: 1.5rem;
  }

  .icons__cont {
    gap: 1rem;
  }

  .icons__cont img {
    width: 3.4rem;
    height: auto;
  }

  .location__text {
    font-size: 1.6rem;

    height: 100%;

    display: grid;
    align-items: end;
  }
}
</style>
