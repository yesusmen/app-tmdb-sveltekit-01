<script>
let logo = 'yesus_perfil.png'

</script>
<nav>
    <div class="container">
        <div class="brand">
            <a href="/">
                <img src={logo} alt="Logo Jesús Araujo" class="img">
            </a>
            <a href="/">
                <p class="text-brand">Movie Database Svelte</p>
            </a>
        </div>
        <div class="nav-item">
            <a href="/">
                <p>Home</p>
            </a>
            <a href="/about">
                <p class="text-link">About</p>
            </a>
        </div>
    </div>
</nav>

<style>
    .container {
        display: flex;
        min-height: 10vh;
        align-items: center;
        justify-content: space-between;
    }
    a {
        font-size: 1rem;
        font-weight: bold;
        font-family: 'Poppins';
        color: black;
        text-decoration: none;
    }
    .img {
        width: 40px;
    }
    .brand {
        display: flex;
        align-items: center;
    }
    .text-brand {
        margin-left: 1rem;
        padding: 0;
    }
    .nav-item {
        display: flex;
        align-items: center;
        margin-right: 1rem;
    }
    .nav-item p:hover {
        color: rgb(96,100,201);
    }
    .text-link {
        margin-left: 0.7rem;
    }
</style>