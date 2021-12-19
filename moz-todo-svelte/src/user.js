import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store'

export const db = GUN();

export const user = db.user().recall({sessionStorage: true});
console.log("here")
console.log(user)

export const username = writeable('');
user.get("alias").on(v => username.set(v))

db.on('auth', async(e) => {
    const alias = await user.get("alias");
    username.set(alias);
})