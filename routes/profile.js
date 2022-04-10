const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/:platform/:username', async (req, resp) => {
    try {
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        }

        const platform = req.params.platform
        const username = req.params.username

        //Get General API Data and Session API Data
        //General
        const response1 = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${username}`, { headers })
        const api = await response1.json()
        //Session
        const response2 = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${username}/sessions`, { headers })
        const sessions = await response2.json()

        //Error check
        if (api.errors) {
            errMsg = api.errors[0].message;
            console.log(errMsg)

            return resp.status(404).render('error', { api: api })
            // return resp.status(404).json({
            //     message: `${errMsg}`
            // })
        }

        resp.render('profile', { api: api, sessions: sessions })

        // console.log(api)
        // console.log(sessions)
        // console.log(req.params.platform, req.params.username);
    }
    catch (error) {
        console.log(error);

        resp.status(500).json({
            message: 'Server Error'
        })
    }
})

module.exports = router;