<template>
    <div class="hero-section">
        <div class="container pt-5 d-flex justify-content-center align-items-center">
            <div class="hero-section-items text-center">
                <p class="fs-5 mb-0">Hello, I'm AZHAR</p>
                <span class="fw-bold main-text my-lg-5" id="writer-effect"></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    mounted() {
        const options = {
        strings: ['UI/UX Designer', 'and...', 'Front-End Developer'],
        typeSpeed: 100,
        backSpeed: 40,
        backDelay: 500,
        // startDelay: 0,
        loop: true,
        smartBackspace: true,
        fadeOut: false,
    }
    new Typed('#writer-effect' ,options)
    },
}

    // var typed = new typed('#writer-effect' ,{
    // });
    // var typed = new Typed('#writer-effect', typedOptions);
  </script>