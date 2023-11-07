import useMessages from "./useMessages"
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'

export default function () {

    const STORAGE_NAME = 'vc_user'
    const messages = useMessages()
    const store = useAppStore()
    const router = useRouter()

    const setStorage = (userInfo) => {
        sessionStorage.setItem(STORAGE_NAME, JSON.stringify(userInfo))
        store.login()
        redirect()
    }

    const deleteSessionStorage = () => {
        sessionStorage.removeItem(STORAGE_NAME)
    }

    const redirect = () => {
        router.push({ name: 'Dashboard' })
    }

    const getStorage = () => {
        if (sessionStorage.getItem(STORAGE_NAME) !== null) {
            const storage = sessionStorage.getItem(STORAGE_NAME)
            store.login() 
            return JSON.parse(storage)
        } else {
            return {
                isAuthorized: false
            }
        }
    }

    const setUser = (user, pass) => {
        if ( user == import.meta.env.VITE_USER && pass == import.meta.env.VITE_PASS ) {
            messages.clear()
            setStorage({ name: user, isAuthorized: true })
        }
        else {
            messages.send({ type: 'warning', text: 'Wrong user or password' })
        }
    }

    const logout = () => {
        deleteSessionStorage()
        store.logout()
    }

    return {
        getStorage,
        setUser,
        logout,
    }
}