<script>
    let github = 'image/icon_github.svg'
    let twitter = 'image/icon_twitter.svg'
    let linkedin = 'image/icon_linkedin.svg'
    let netlify = 'image/netlify.svg'
    let intelectual = 'image/icon_developer.svg'
</script>

<div class="red-social">
    <div class="icon-social">
        <a href="https://github.com/yesusmen">
            <img src={github} alt="Github Yesusmen">
        </a>
        <a href="https://twitter.com/AraujoYesusmen">
            <img src={twitter} alt="Twitter @AraujoYesusmen">
        </a>
        <a href="https://www.linkedin.com/in/yesusmen/">
            <img src={linkedin} alt="LinkedIn Jesús Araujo">
        </a>
    </div>
    <div class="provider">
        <a href="https://www.netlify.com/">
            <img src={netlify} alt="Logo Netlify">
        </a>
        <a href="https://www.netlify.com/">
            <p>Deploy by Netlify</p>
        </a>
    </div>
    <div class="web-master">
        <img src={intelectual} alt="intelectual">
        <p>
            by <strong>
                <a href="https://portafolio-yesus.netlify.app/">
                    Ing. Jesús E. Araujo G.
                </a>
            </strong> 2022
        </p>
    </div>
</div>


<style>
    .red-social {
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    .icon-social {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon-social img {
        width: 2.2rem;
        margin: 0.5rem;
    }
    .provider {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .provider img {
        width: 2.5rem;
        margin-right: 0.5rem;
    }
    .web-master {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .web-master img {
        width: 2.5rem;
        margin-right: 0.5rem;
    }
    .web-master p strong {
        margin: 0 0.5rem 0 0.5rem;
        color: #FE5D15;
    }
    .web-master p strong a {
        text-decoration: none;
        color: #FE5D15;
    }
</style>