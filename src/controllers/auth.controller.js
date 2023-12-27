import User from "../models/user.model.js";

export const signup = async ( req, res ) => {
    const { email, password, username } = req.body;

    try {
        const newUser = new User({
            username,
            email,
            password,
        });

        const userSaved = await newUser.save();
        res.json( userSaved );
    } catch (error) {
        console.log(error);
    }
    
    res.send('recording');
};

export const signin = ( req, res ) => res.send('signin');

export const profile = ( req, res ) => res.send('profile');