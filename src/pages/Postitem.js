/*
    16 Aug 2020 - created by jiwo

    form
    -- name : string - min 2 & max 50
    -- price : number
    -- desc : string - max 200
*/

import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { ThemeContext } from '../contexts/ThemeContext'
import { txtTitle, btn, labelInput, form } from '../assets/style'
import { v4 } from 'uuid'
import { storage, db } from '../script/firebaseInit'
import RetVal from '../class/RetVal'
import {
    SUCCESS_UPLOAD,
    SUCCESS_INSERT_DATA,
    SUCCESS_DELETE_DATA,
    SUCCESS_UPLOAD_INSERT_DATA
} from '../string'

const Postitem = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    const { register, handleSubmit, errors } = useForm()

    const submitItem = async (data) => {

        let file = document.getElementById('input_file').files[0]
        let fileName = v4()

        let retUploadImg = await uploadImg(fileName, file) //upload Img

        if (retUploadImg.isSuccess) {
            let retInsertData = await insertData({ ...data, fileName }) //insert Data

            if (retInsertData.isSuccess)
                alert(SUCCESS_UPLOAD_INSERT_DATA) //success upload & insert
            else {
                await deleteData(fileName, file) //delete img if insert data failed
                alert(retInsertData.msg)
            }
        }
        else
            alert(retUploadImg.msg)

    }

    const uploadImg = async (fileName, file) => {

        let metadata = { contentType: 'image/jpeg' }

        try {
            let data = await storage.child('uploads/' + fileName).put(file, metadata)

            return new RetVal(true, data, SUCCESS_INSERT_DATA)
        } catch (err) {
            return new RetVal(false, null, err.message_)
        }
    }

    const insertData = async (data) => {

        try {
            let retVal = await db.collection("items").add({
                name: data.name,
                desc: data.desc,
                price: data.price,
                fileName: data.fileName
            })

            return new RetVal(true, retVal, SUCCESS_UPLOAD)
        }
        catch (err) {
            return new RetVal(false, null, err.message_)
        }
    }

    const deleteData = async (fileName, file) => {

        try {
            let data = await storage.child('uploads/' + fileName).delete()

            return new RetVal(true, data, SUCCESS_DELETE_DATA)
        } catch (err) {
            return new RetVal(false, null, err.message_)
        }
    }

    return (
        <div style={{ color: theme.syntax, background: theme.bg }}>

            <div className="container mx-auto flex justify-center pb-8">
                <form onSubmit={handleSubmit(submitItem)} className={form.card} style={{ background: theme.ui }}>
                    <p className={txtTitle}>Post Item</p>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <input className={`${labelInput.medium}`}
                                type="file"
                                id="input_file"
                                name="file"
                                accept="image/*"
                                ref={register({ required: true })} />
                            <p className="text-xs italic">File extension must be an '.jpg' '.png' '.jpeg'.</p>
                            {errors.file && <p className="text-xs italic text-red-600">please select an image</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <input className={labelInput.medium}
                                type="text"
                                placeholder="Item Name"
                                name="name"
                                ref={register({ required: true, minLength: 2, maxLength: 50 })} />
                            <p className="text-xs italic">maximum length is 50</p>
                            {errors.name && <p className="text-xs italic text-red-600">name must between 2 and 50</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <div className="flex items-center">
                                <p className="mr-2">Rp.</p>
                                <input className={labelInput.medium}
                                    type="number"
                                    placeholder="Item price in Rupiah"
                                    name="price"
                                    ref={register({ required: true })} />
                            </div>
                        </div>
                        {errors.price && <p className="text-xs italic text-red-600">cannot be empty</p>}
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <textarea className={labelInput.medium}
                                type="textarea"
                                placeholder="Description"
                                name="desc"
                                ref={register({ maxLength: 200 })} />
                            <p className="text-xs italic">Maximum length is 200</p>
                        </div>
                        {errors.desc && <p className="text-xs italic text-red-600">maximum length is 200</p>}
                    </div>
                    <div className="mt-10">
                        <button className={btn.primary} type="submit">Post Item</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Postitem