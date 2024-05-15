<script>
    /** @type {import('./$types').PageData} */
    export let data;
    export let post  = data.posts[0];

    console.log(post);
</script>

<h1 class="h2">{post.title}</h1>
{post.summary}<br><br>
{post.content}