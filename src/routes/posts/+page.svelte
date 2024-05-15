<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>
<ul>
    {#each data.posts as post}
    <li><a href="/posts/{post.id}">{post.title}</a></li>
    {/each}
</ul>