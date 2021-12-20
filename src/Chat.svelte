<script>

    import Message from "./Message.svelte"
    import Login from "./Login.svelte"
    import { username, user } from "./user"

    import GUN from "gun"
    import { onMount } from "svelte";
    const db = GUN();

    let newMessage;
    let messages = [];

    onMount(() => {
        db.get('chat')
        .map()
        .once(async(data, id) => {
            if (data) {
                const key = "#jack"

                var message = {
                    who: await db.user(data).get('alias'),
                    what: (await SEA.decrypt(data.what, key)) + '',
                    when: GUN.state.is(data, 'what')
                }

                if (message.what) {
                    messages = [...messages.slice(-100), message]
                }
            }
        }); 
    });

    async function sendMessage() {
        const secret = await SEA.encrypt(newMessage, "#jack");
        const message = user.get('all').set({what: secret});
        const index = new Date().toISOString();
        db.get('chat').get(index).put(message);
        newMessage = '';
    }
</script>

<div>
    {#if $username}
        {#each messages as message (message.when)}
            <Message {message} sender={$username} />        
        {/each}
        <form on:submit|preventDefault={sendMessage}>
            <input type="text" placeholder="Type a message..." bind:value={newMessage} maxlength="100" />
            <button type="submit" disabled={!newMessage}> Send </button>
          </form>
    {:else}
        <Login/>
    {/if}
</div>
