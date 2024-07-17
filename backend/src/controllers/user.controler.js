import { asynchandeler } from "../utils/asyncHandeler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import mongoose from "mongoose";


const generateAccessAndRefereshToken = async (userID) => {
    try {
        const user = await User.findById(userID)
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "something went wrong while generating tokens ")
    }
}


const registerUser = asynchandeler(async (req, res) => {

    const { username, email, password } = req.body
    console.log("email", email);

    if (
        [username, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "all fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        throw new ApiError(409, "this account is already register")
    }

    const user = await User.create({
        fullname,
        email,
        password,
        username: username
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "something went wrong while registering a user")

    }

    return res.status(201).json(
        new ApiResponce(200, createdUser, "user register sucessfully")
    )
})

export{
    registerUser,
}