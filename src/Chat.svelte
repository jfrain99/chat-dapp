<script>
    import Login from "./Login.svelte"
    import { username } from "./user"
</script>

<div>
    {#if $username}
        <h1> Logged in </h1>
    {:else}
        <Login/>
    {/if}
</div>
