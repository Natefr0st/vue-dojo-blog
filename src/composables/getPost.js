import {ref} from "vue";

export const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            const data = await fetch(`http://localhost:3000/posts/${id}`)
            if (!data.ok) {
                throw Error("that post does not exists")
            }
            post.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(err.message)
        }
    }

    return {post, error, load}
}