import { useAppStore } from '@/stores/app'

export default function () {

    const store = useAppStore()
    let timeoutID

    const send = (props) => {
        store.changeMessages(props)
        autoClose()
    }

    const clear = () => {
        clearTimeout(timeoutID)
        store.changeMessages()
    }

    const autoClose = () => {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
            store.changeMessages()
        }, 5000);
    }

    return {
        send,
        clear,
    }
}