import React from "react";
import iconClose from "../assets/icons/icon-close.svg"
import iconImportant from "../assets/icons/icon-important.svg"

type ModalProps = {
    isVisible: boolean;
    onClose: () => void;
};

const DeleteIndex = ({ isVisible, onClose,}: ModalProps) => {
    if ( !isVisible ) return null;

    const handleClose = (e : React.MouseEvent<HTMLDivElement>) => {
        const targetElement = e.target as HTMLDivElement;
        if (targetElement.id === "wrapper") onClose();
    }

    return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center" id="wrapper" onClick={handleClose}>
        <div className="w-[600px] relative">
            <div className="bg-white p-6 rounded">
                <div className="flex justify-between items-center">
                    <h2 className="text-black text-base">Delete Index</h2>
                    <button className="text-black text-base" onClick={() => onClose()}>
                        <img src={iconClose} alt="none" className="h-7 w-7 p-1" />
                    </button>
                </div>
                <div className="mt-5 mb-4 text-sm rounded-sm">
                    <p>Are you sure you want to delete this index?</p>
                    <p>This will permanently delete all those indices and associated records from your application.</p>
                </div>

                <form>
                    <div className="mb-4">
                        <label className="label text-sm">Enter "DELETE" to confirm.</label>
                        <input type="text" name="" id="" className="input w-full border rounded-sm text-sm p-2"/>
                    </div>
                    <div className="w-full bg-[#EDA3AD] rounded-sm">
                        <button type="button" className="p-1 text-sm text-white flex justify-center items-center h-full w-full">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    )
}

export default DeleteIndex;