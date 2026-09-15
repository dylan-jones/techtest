import './Dialog.css'
import DialogHeader from './DialogHeader';

const Dialog = ({ children }) => {
    return (
        <dialog open>
            <DialogHeader>Dialog</DialogHeader>
            {children}
        </dialog>
    )
}

export default Dialog;