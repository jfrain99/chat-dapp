<script>
    import { username, user } from "./user";
    
    function logout() {
        user.leave()
        username.set('')
    }

    console.log(username, user)
</script>
<header>
    <h1>Jack Frain</h1>
    {#if $username}
        <span> Hello <strong>{$username}</strong></span>
        <button on:click={logout}>
            Log out
        </button>
    {:else}
        <h1>Gunjs Chat</h1>
    {/if}
</header>