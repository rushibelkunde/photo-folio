import React, { useState } from 'react'
import { db } from './FirebaseInit'
import { addDoc, collection } from 'firebase/firestore'

function AlbumForm() {

    const [album, setAlbum] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, "albums"), {
            title: album
        })
    }
    return (
        <>
            <form class="row row-cols-lg-auto g-3 align-items-center" onSubmit={handleSubmit}>
                <div class="col-12">

                    <div class="input-group">

                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" onChange={(e) => setAlbum(e.target.value)} placeholder="Create Album" />
                    </div>
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Add</button>
                </div>
            </form>
        </>
    )
}

export default AlbumForm

