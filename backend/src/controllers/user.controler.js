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


const loginUser = asynchandeler(async (req, res) => {

    //req body => data
    //username or email
    //find ther user 
    //passwore check
    // access and refresh token
    //send cookies
    console.log(req.user)
    const { username, email, password } = req.body
    console.log(username, email, password)
    if (!(username || email)) {
        throw new ApiError(400, "username or email is required")
    }

    const user = await User.findOne({ $or: [{ username }, { email }] })
    console.log("user - ", user)
    if (!user) {
        throw new ApiError(404, "user doesnot exists")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "enter correct password")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshToken(user._id)
    console.log("accessToken - ", accessToken, "refreshToken - ", refreshToken)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    const options = {
        httpOnly: true,
        secure: true,
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponce(
                200,
                {
                    user: loggedInUser,
                    accessToken, refreshToken,
                },
                "user logged in successfully",
            )
        )
})


const logOutUser = asynchandeler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined,

            }
        },
        {
            new: true
        }
    )
    const options = {
        httpOnly: true,
        secure: true,
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponce(200, {}, "User logged out"))
})

export {
    registerUser,
    loginUser,
    logOutUser,
    
}