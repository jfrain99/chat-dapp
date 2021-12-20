<script>
    import { username, user } from "./user";
    
    function logout() {
        user.leave()
        username.set('')
    }

    console.log(username, user)
</script>
<header>
    {#if $username}
    <box>
        <span> Hello <strong>{$username}</strong>!</span>
        <button on:click={logout}>
            Log out
        </button>
    </box>
    {:else}
        <h1>Gunjs Chat</h1>
    {/if}
</header>