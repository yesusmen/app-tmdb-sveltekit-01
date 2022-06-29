<script>
    import global from './global.css'
    import Navbar from '../components/Navbar.svelte'
    import Footer from '../components/Footer.svelte'
</script>

<svelte:head>
    <title>Movie DB Svelte</title>
</svelte:head>

<Navbar />
<slot />
<Footer />